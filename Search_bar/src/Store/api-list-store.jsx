import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
export const ApiListContext = createContext({
  YuData: [],
  AbData: [],
  ApData: [],
  addYuData: () => {},
  addABdata: () => {},
  addAcData: () => {},
  updateYList: () => {},
  updateABList: () => {},
  updateAcList: () => {},
});

const YuListReducer = (currentApiList, action) => {
  let newApiList = currentApiList;
  if (action.type === "ADD_Y_LIST") {
    newApiList = action.payload.lists;
  }
  if (action.type === "UPDATE_Y_LIST") {
    newApiList = action.payload.lists;
  }
  return newApiList;
};
const ABListReducer = (currentApiList, action) => {
  let newApiList = currentApiList;
  if (action.type === "ADD_AB_LIST") {
    newApiList = action.payload.lists;
  }
  if (action.type === "UPDATE_AB_LIST") {
    newApiList = action.payload.lists;
  }
  return newApiList;
};
const ApListReducer = (currentApiList, action) => {
  let newApiList = currentApiList;
  if (action.type === "ADD_AP_LIST") {
    newApiList = action.payload.lists;
  }
  if (action.type === "UPDATE_AP_LIST") {
    newApiList = action.payload.lists;
  }
  return newApiList;
};

export const ApiListProvider = ({ children }) => {
  const [YuData, dispatchYuList] = useReducer(YuListReducer, []);
  const [AbData, dispatchAbList] = useReducer(ABListReducer, []);
  const [ApData, dispatchApList] = useReducer(ApListReducer, []);
  const addYuData = (lists) => {
    dispatchYuList({ type: "ADD_Y_LIST", payload: { lists } });
  };

  const updateYList = (lists) => {
    dispatchYuList({ type: "UPDATE_Y_LIST", payload: { lists } });
  };
  const addABdata = (lists) => {
    dispatchAbList({ type: "ADD_AB_LIST", payload: { lists } });
  };

  const updateABList = (lists) => {
    dispatchAbList({ type: "UPDATE_AB_LIST", payload: { lists } });
  };
  const addAcData = (lists) => {
    dispatchApList({ type: "ADD_AP_LIST", payload: { lists } });
  };

  const updateAcList = (lists) => {
    dispatchApList({ type: "UPDATE_AP_LIST", payload: { lists } });
  };
  return (
    <ApiListContext.Provider
      value={{
        YuData,
        addYuData,
        AbData,
        addABdata,
        ApData,
        addAcData,
        updateYList,
        updateABList,
        updateAcList,
      }}
    >
      {children}
    </ApiListContext.Provider>
  );
};

ApiListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
