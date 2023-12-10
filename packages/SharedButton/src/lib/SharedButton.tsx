import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedButtonProps {
  label: string;
}

const StyledSharedButton = styled.div`
  color: pink;
`;

export function SharedButton(props: SharedButtonProps) {
  return (
    <StyledSharedButton>
      <button>{props.label}</button>
    </StyledSharedButton>
  );
}

export default SharedButton;
