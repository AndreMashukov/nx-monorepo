import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedComponentProps {}

const StyledSharedComponent = styled.div`
  color: green;
`;

export function SharedComponent(props: SharedComponentProps) {
  return (
    <StyledSharedComponent>
      <h1>SharedComponent!</h1>
    </StyledSharedComponent>
  );
}

export default SharedComponent;
