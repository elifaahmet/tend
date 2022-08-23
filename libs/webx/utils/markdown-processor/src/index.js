const fs = require('fs');
const minimist = require('minimist');
const matter = require('gray-matter');

const args = minimist(process.argv.slice(2));

if (!args.sourceFile || !args.outputFolder) {
  console.error('Please specify source-file and output-folder arguments!');
  process.exit(1);
}

const sourceFile = args.sourceFile;
const articlesFolder = args.outputFolder;
const str = fs.readFileSync(sourceFile, 'utf8');
const trimmedContent = str.trimStart().trimEnd();
const withoutEmptyLines = trimmedContent.split(/\[\/\/]: #.*?\)/).map(line => line.trim()).filter(line => line !== '');

let articlesFolderPathWithLang = '';
let targetArticleFolder = '';
const metaData = {};
let heroMetaData = undefined;
const sections = [];

withoutEmptyLines.forEach((markdownPart, i) => {
  const {data, content} = matter(markdownPart);


  if (data.section_type === 'page_metadata') {
    articlesFolderPathWithLang = `${articlesFolder}/${data.locale}`;
    targetArticleFolder = `${articlesFolderPathWithLang}/${data.slug}`;
    fs.mkdirSync(targetArticleFolder, {recursive: true});
    fs.copyFileSync(sourceFile, `${targetArticleFolder}/original_file.md`);
    metaData.page_metadata = data;
  } else {

    if (data.section_type === 'hero') {
      heroMetaData = data;
    }

    if (Array.isArray(data.body_parts)) {
      const bodyParts = markdownPart.split('===');
      data.body_parts.forEach((bodyPart, j) => {
        const fileName = bodyPart + '-' + i;
        const filePath = `${targetArticleFolder}/${fileName}.mdx`;
        fs.writeFileSync(filePath, bodyParts[j].trim());
      })

      sections.push({section: data.section_type, hasContent: content.trim() !== '', bodyParts: data.body_parts});

    } else {
      const fileName = data.section_type + '-' + i;
      const filePath = `${targetArticleFolder}/${fileName}.mdx`;
      fs.writeFileSync(filePath, markdownPart);
      sections.push({section: data.section_type, hasContent: content.trim() !== ''});
    }

  }

});


metaData.sections = sections;


const metaDataFilePath = `${targetArticleFolder}/metadata.json`;
fs.writeFileSync(metaDataFilePath, JSON.stringify(metaData));



const allArticlesJSONPath = `${articlesFolderPathWithLang}/all-articles.json`;
const allArticlesFromThisLanguage = JSON.parse(fs.readFileSync(allArticlesJSONPath));
const alreadyExistIndex = allArticlesFromThisLanguage.findIndex(article => article.slug === metaData.page_metadata.slug);
const articleDataForCommonJSON = {...heroMetaData, ...metaData.page_metadata};
delete articleDataForCommonJSON.section_type;
if (alreadyExistIndex >= 0){
  allArticlesFromThisLanguage[alreadyExistIndex] = articleDataForCommonJSON;
} else {
  allArticlesFromThisLanguage.push(articleDataForCommonJSON);
}
fs.writeFileSync(allArticlesJSONPath, JSON.stringify(allArticlesFromThisLanguage, null, '\t'));

