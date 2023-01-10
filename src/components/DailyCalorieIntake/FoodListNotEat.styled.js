import styled from '@emotion/styled';
import ListItemText from '@mui/material/ListItemText';

export const ListText = styled(ListItemText)`
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  width: 100%;
  color: ${prop=>prop.theme.palette.text.secondary};
`;

export const ProductListText = styled(ListItemText)`
  margin-left: 15px;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  width: 100%;
  color: ${prop=>prop.theme.palette.text.secondary};
`;
