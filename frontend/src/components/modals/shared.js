import styled from 'styled-components'

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '250px',
    border: '1px solid #11111188',
  },
};

export const Form = styled.form`
  z-index: 999;
`

export const RightPad = styled.div`
    margin-right: 3em;
`

export const LeftPad = styled.div`
    margin-left: 2em;
`

export const ModalHeader = styled.h3`
    font-weight: 700
`

export const Padding = styled.span`
    content: '&nbsp;';
    margin-right: 2em;
`