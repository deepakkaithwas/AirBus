import React from "react";

const Statistic = props => {
  const { title, value, prefix, suffix } = props;
  return (
    <div className={classNames(prefixCls, className)} style={style}>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div style={valueStyle} className={`${prefixCls}-content`}>
        {prefix && (
          <span className={`${prefixCls}-content-prefix`}>{prefix}</span>
        )}
        {valueNode}
        {suffix && (
          <span className={`${prefixCls}-content-suffix`}>{suffix}</span>
        )}
      </div>
    </div>
  );
};

export default DesruptionReport;
