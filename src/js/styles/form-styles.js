import { css } from 'lit';

export const formStyles = css`
  * {
    box-sizing: border-box;
  }
  .label {
    color: #888;
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 200;
    font-size: var(--dw-form-label-font-size, 1.2em);
  }
  textarea.txt, input.txt {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid var(--primary-color, #303030);
    border-radius: 6px;
    padding: 7px 10px;
    font-size: 0.9em;
  }
`;