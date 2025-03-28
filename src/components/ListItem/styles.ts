import { css, styled } from 'styled-components';

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div<ContainerProps>(({ done }) => {
    return css`
        display: flex;
        background-color: #20212c;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0px;
        align-items: center;

        input {
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }

        label {
            color: #ccc;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
    `;
});
