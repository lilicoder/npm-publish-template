import React from "react";
/**
 * 校验form表单中是否包含错误
 * @param error getFieldsError 返回的错误
 * @param fieldName 需要校验的错误列名称
 * @returns {*}
 */
export function formFieldHasError(error, fieldName) {
    return error && error[fieldName]
}

/**
 * 获取表单验证失败错误提示信息
 * @param error
 * @returns {*}
 */
export function getFieldHasErrorTip(error) {
    return (<div> {error.map((error, index) => (<p key={index}>{error}</p>))} </div>)
}