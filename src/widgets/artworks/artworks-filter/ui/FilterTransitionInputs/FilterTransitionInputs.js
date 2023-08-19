import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import { FilterInputsList } from "../FilterInputsList/FilterInputsList";
import styles from "./FilterTransitionInputs.module.scss";

export const FilterTransitionInputs = ({
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
        <FilterInputsList
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

FilterTransitionInputs.propTypes = {
  inputs: PropTypes.array,
  filterByRef: PropTypes.any,
  isAppear: PropTypes.bool,
  filter: PropTypes.object,
  onChange: PropTypes.func,
};
