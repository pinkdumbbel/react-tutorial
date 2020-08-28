import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyle = css`
  ${({ theme, color }) => {
    const selected = theme.attr.color[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizeStyle = css`
  ${({ theme, size }) => {
    const height = theme.attr.size[size].height;
    const fontSize = theme.attr.size[size].fontSize;
    return css`
      height: ${height};
      font-size: ${fontSize};
    `;
  }}
`;

const outlineStyle = css`
  ${({ outline, color, theme }) => {
    const selected = theme.attr.color[color];
    if (outline) {
      return css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
      `;
    }
  }}
`;

const fullWidthStyle = css`
  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
        justify-content: center;

        & + & {
          margin-left: 0;
          margin-top: 1rem;
        }
      `;
    }
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  align-items: center;
  jusify-contents: center;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */  
  ${colorStyle}
  /*크기*/
  ${sizeStyle}
  /*outline*/
  ${outlineStyle}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  /*fullWidth*/
  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
  outline: false,
  fullWidth: false,
};

export default Button;
