import colors from "@/styles/colors";
import { styled } from "styled-components";

export const FilesInputContainer = styled.label`
  position: relative;
  display: block;

  width: 100%;
  min-width: 275px;

  > .footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    padding: 0.5em 0;
    color: #888;
  }

  > .upload-files {
    width: 100%;
    border-radius: 5px;
    border: 2px solid #${colors.hex.primary._400};
    color: #${colors.hex.primary._400};
    cursor: pointer;
    font-weight: 600;
    padding: 0.5em 0.75em;
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 0.85em;
    background-color: #fff;
  }

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: 0;
  }
`;

export const FilesContainer = styled.ul`
  background-color: #f0f0f0;
  list-style: none;
  display: flex;
  flex-flow: column;
  gap: 0.75em;
  padding: 0.5em 0;

  height: 100%;
  max-height: 400px;
  width: 100%;
  overflow: scroll;
  scrollbar-width: thin;
  margin: 0.5em 0 0 0;
`;
export const FileContainer = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 0.75em;
  padding: 0 0.75em;

  &:not(:last-child) ::after {
    content: "";
    position: absolute;
    bottom: 0;
    transform: translate(0, 500%);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }

  > .remove-file {
    background-color: #f55;
    color: #fff;
    display: grid;
    font-size: 0.8em;
    height: 2em;
    place-items: center;
    width: 2em;
  }

  > .type,
  > .size {
    width: 4em;
  }

  > .type {
    text-align: center;
    padding: 0.25em;
    border-radius: 2px;
    font-size: 0.8em;
  }

  > .name {
    max-width: 7em;
    font-size: 0.9em;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > .size {
    font-size: 0.75em;
    text-align: right;
  }

  > .image {
    background-color: #ff5;
  }
  > .xls,
  > .xlsx {
    background: #1f6f42;
    color: #fff;
  }
  > .pdf {
    background: #db191e;
    color: #fff;
  }
`;
