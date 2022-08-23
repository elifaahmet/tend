import React, {ReactHTMLElement} from 'react'
import Link from 'next/link'
import styled from "styled-components";


const ImageWrapper = styled.div`
  max-height: 100%;
  max-width: 100%;

  & > img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const Paragraph: React.FC<any> = props => {
  if (typeof props.children !== 'string') {

    if (Array.isArray(props.children)) {
      let singleParagraphArray = [];
      const allChildArray = [];


      props.children.forEach((child) => {
        if (child.type?.name === 'Img') {
          if (singleParagraphArray.length > 0) {
            allChildArray.push(singleParagraphArray);
            singleParagraphArray = [];
          }
          allChildArray.push(child)

        } else {
          singleParagraphArray.push(child);
        }
      })

      if (singleParagraphArray.length > 0) {
        allChildArray.push(singleParagraphArray);
      }

    return (
        <>
          {allChildArray.map((item, i) => {
            if (Array.isArray(item)) {
              return (
                  <p key={i}>
                    {item.map((child, childIndex) => {
                      return (
                          <React.Fragment key={i + '-' + childIndex}>
                            {child}
                          </React.Fragment>
                      )
                    })}
                  </p>
              )
            } else {
              return (
                  <React.Fragment key={i}>
                    {item}
                  </React.Fragment>
              )
            }
          })}
        </>
      )
    }

    return <>{props.children}</>
  }

  return <p {...props} />
}

const Img: React.FC<any> = props => {
  return (
    <ImageWrapper>
      <img {...props} loading="lazy"/>
    </ImageWrapper>
  )
}

const Anchor: React.FC<Partial<ReactHTMLElement<HTMLAnchorElement>['props']>> =
  props => {
    const {href, children} = props

    if (!href || href!.substr(0, 4) === 'http') {
      return <a {...props} className="outbound-link" />
    }

    return (
      <Link href={href!}>
        <a className="inbound-link">{children}</a>
      </Link>
    )
  }


export const componentOverrides = {
  img: Img,
  p: Paragraph,
  a: Anchor,
}
