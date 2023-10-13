import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { FiltersList } from "../FiltersList/FiltersList";
import styles from "./TransitionFiltersList.module.scss";

export const TransitionFiltersList = ({
  inputs = [],
  filterByRef = null,
  isAppear = false,
  filter = {},
  onChange = () => {},
}) => {
  return (
    <CSSTransition
      nodeRef={filterByRef}
      in={isAppear}
      timeout={{ exit: 200 }}
      classNames={{
        enterActive: styles.enter_active,
        enterDone: styles.enter_done,
        exitActive: styles.exit_active,
        exitDone: styles.exit_done,
      }}
      unmountOnExit
    >
      {(state) => (
        <FiltersList
          className={styles.default}
          inputs={inputs}
          inputsRef={filterByRef}
          filter={filter}
          onChange={onChange}
        />
      )}
    </CSSTransition>
  );
};

TransitionFiltersList.propTypes = {
  inputs: PropTypes.array,
  filterByRef: PropTypes.any,
  isAppear: PropTypes.bool,
  filter: PropTypes.object,
  onChange: PropTypes.func,
};
