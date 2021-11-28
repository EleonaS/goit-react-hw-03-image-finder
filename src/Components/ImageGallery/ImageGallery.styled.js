import styled from 'styled-components';

const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(
    auto-fill,
    minmax(320px, 1fr)
  );
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 30px 60px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

/*const ListItem = styled.li`
cursor:pointer;
height:400px;
`;
export {GalleryList,ListItem}
*/

export { GalleryList };
