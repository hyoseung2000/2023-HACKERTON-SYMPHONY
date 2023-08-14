import { styled } from 'styled-components';
import { IcSearch } from '../../assets/icons';

export default function HashtagSearch() {
  const handleSearch = () => {};

  return (
    <StHashtagSearch>
      <StSearchInput>
        <input type="text" placeholder="해시태그를 입력하세요." />
        <button type="button" onClick={handleSearch}>
          <IcSearch />
        </button>
      </StSearchInput>
    </StHashtagSearch>
  );
}

const StHashtagSearch = styled.div``;

const StSearchInput = styled.div`
  position: relative;
  margin-bottom: 1.35rem;

  & > input {
    width: 100%;
    padding: 1.2rem 1.6rem 0.9rem 1.6rem;

    box-sizing: border-box; // padding이 너비에 영향 미치지 않게
    border: none;
    border-radius: 1rem;
    outline: none;
    background-color: ${({ theme }) => theme.colors.Gray2};
    ${({ theme }) => theme.fonts.Body3};
  }

  & > button {
    position: absolute;
    top: 0.9rem;
    right: 1.6rem;
  }
`;
