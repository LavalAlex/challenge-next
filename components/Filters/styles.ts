import { css, styled } from "styled-components";
import colors from "@/styles/colors";

export const FilterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 1.5em 0;

  .top {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1rem 0 0.5rem;
    margin: 0 1.5rem 0 auto;
    time {
      font-size: 0.9rem;
      color: #666;
    }
  }

  .container {
    margin: 0 2rem 0 auto;
  }

  .empty {
    font-size: 2rem;
    font-weight: 700;
    color: #ddd;
    width: max-content;
    margin: 1rem auto;
  }
`;

export const TableMetadata = styled.div`
  display: flex;
  gap: 1em;
  padding: 0.5em 1em;
  font-size: 0.8rem;
  color: #888;
`;

interface Props {
  $clickable?: boolean;
}
export const ButtonFilter = styled.table<Props>`
  border-collapse: collapse;
  overflow: scroll;

  .nowrap {
    white-space: nowrap;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .container {
    margin: 0 0 0 auto;
  }

  .priority {
    font-size: 0.75rem;
    width: 100%;
  }

  p {
    white-space: nowrap;
  }

  thead {
    th {
      text-align: left;
      padding: 0.5em 0 !important;
      min-width: 3em;
      font-size: 0.8em;
      text-transform: capitalize;
      font-weight: 600;
      color: #555;

      > * {
        position: relative;
        width: 100%;
      }
    }
  }

  thead th > *,
  tbody tr > * {
    padding: 0 0.75em;
    position: relative;
  }

  thead th:not(:last-child) *,
  tbody tr > *:not(:last-child) {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      width: 1px;
      height: 100%;
      background-color: #bbb;
    }
  }

  tbody tr > *:not(:last-child)::after {
    height: 75%;
  }

  tbody {
    tr {
      background-color: #${colors.hex.light._900};
    }
    tr:nth-child(2n) {
      background-color: #${colors.hex.light._600};
    }

    .id {
      width: max-content;
      padding: 0.25em 1em;
    }

    tr:hover {
      background-color: #${colors.hex.primary._500}!important;
      color: #fff;
      .id {
        background-color: #${colors.hex.primary._500}!important;
      }
    }
  }
  tr > * {
    font-size: 0.9rem;
  }

  .id > p {
    font-size: 0.75em;
    font-weight: 600;
    padding: 0;
    width: 100%;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
  }

  .w-100 {
    width: 100%;
  }

  ${({ $clickable }) =>
    $clickable &&
    css`
      tbody {
        tr {
          cursor: pointer;
        }
      }
    `}
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0 0 0;

  .pages {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    > button {
      width: 2rem;
      height: 2rem;
      background-color: #${colors.hex.light._900};
      border-radius: 5px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #666;
      text-decoration: underline;

      &:hover {
        outline: none;
        background-color: #${colors.hex.light._600};
      }
    }

    > button:disabled {
      background: transparent;
      background-color: #${colors.hex.primary._800};
      border: 2px solid #${colors.hex.primary._700};
      color: #${colors.hex.primary._400};
      text-decoration: none;

      &:hover {
        cursor: default;
        outline: none;
      }
    }
  }
`;

export const Container = styled.div`
  width: 4rem;

  .options {
    position: absolute;
    z-index: 9999;
    background: #fff;
    box-shadow: 0 7px 14px #0003;
    left: 0;
    top: calc(100% + 0.5rem);
    padding: 0.5em;
    display: flex;
    flex-flow: column;
    gap: 0.5em;
    border-radius: 5px;
    width: 7rem;

    button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
      text-transform: capitalize;
      background-color: #f0f0f0;
      border-radius: 5px;

      &:hover {
        outline: none;
        background-color: #ddd;
      }
    }
  }

  .reset {
    background: #${colors.hex.primary._500};
  }

  ::after {
    display: none;
  }

  button.active {
    background-color: #${colors.hex.primary._500};
    color: #000;
    font-weight: 600;
    &:hover {
      background-color: #${colors.hex.primary._500};
      cursor: default;
    }
  }
`;
