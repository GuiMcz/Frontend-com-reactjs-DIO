import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 90%;
  margin: 20px auto;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  padding: 0 5px;
  position: absolute;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  position: relative;
  margin-top: -39px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid #ccc;
  background-color: #ddd;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 5px solid white;
    background-color: white;
    box-shadow: none;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 50vh;
  padding: 10px;
  margin-top: 45px;
  position: relative;
  &.is-selected {
    display: flex;
    z-index: -1;
    border: 2px solid #ccc;
    border-radius: 5px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
  }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
