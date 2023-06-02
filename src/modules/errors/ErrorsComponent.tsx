import React, { FunctionComponent, memo } from 'react';
import cx from 'classnames';

interface PropsError {
  id: string,
  value?: string,
  onClearError(errorId?: string): void
}

const ErrorComponent: FunctionComponent<PropsError> = memo(({
  // eslint-disable-next-line react/prop-types
  id, value, onClearError,
}) => {
  if (value) {
    return (
      <div key={id} className="Error-card">
        {value}
        <button type="button" className="Error-closeBtn" onClick={() => onClearError(id)}>x</button>
      </div>
    );
  }
  return null;
});
interface PropsErrors {
  error: { [key: string]: null | Error | string; }
  onClearError(errorId?: string): void
}

const ErrorsComponent: FunctionComponent<PropsErrors> = ({
  error,
  onClearError,
}) => {
  const hideClear = Object.values(error).length < 3;

  return (
    <div className="Error-container">
      {Object.entries(error).slice(-3).map((pair) => (
        <ErrorComponent
          key={pair[0]}
          id={pair[0]}
          value={String(pair[1])}
          onClearError={onClearError}
        />
      ))}
      <button
        type="button"
        className={cx({ 'Error-closeAllBtn__hidden': hideClear })}
        onClick={() => onClearError()}
      >
        Очистить
      </button>
    </div>
  );
};

export default ErrorsComponent;
