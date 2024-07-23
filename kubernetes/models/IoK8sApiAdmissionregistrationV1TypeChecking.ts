/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    IoK8sApiAdmissionregistrationV1ExpressionWarning,
    IoK8sApiAdmissionregistrationV1ExpressionWarningFromJSON,
    IoK8sApiAdmissionregistrationV1ExpressionWarningFromJSONTyped,
    IoK8sApiAdmissionregistrationV1ExpressionWarningToJSON,
} from './';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 * @export
 * @interface IoK8sApiAdmissionregistrationV1TypeChecking
 */
export interface IoK8sApiAdmissionregistrationV1TypeChecking {
    /**
     * The type checking warnings for each expression.
     * @type {Array<IoK8sApiAdmissionregistrationV1ExpressionWarning>}
     * @memberof IoK8sApiAdmissionregistrationV1TypeChecking
     */
    expressionWarnings?: Array<IoK8sApiAdmissionregistrationV1ExpressionWarning>;
}

export function IoK8sApiAdmissionregistrationV1TypeCheckingFromJSON(json: any): IoK8sApiAdmissionregistrationV1TypeChecking {
    return IoK8sApiAdmissionregistrationV1TypeCheckingFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1TypeCheckingFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1TypeChecking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expressionWarnings': !exists(json, 'expressionWarnings') ? undefined : ((json['expressionWarnings'] as Array<any>).map(IoK8sApiAdmissionregistrationV1ExpressionWarningFromJSON)),
    };
}

export function IoK8sApiAdmissionregistrationV1TypeCheckingToJSON(value?: IoK8sApiAdmissionregistrationV1TypeChecking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expressionWarnings': value.expressionWarnings === undefined ? undefined : ((value.expressionWarnings as Array<any>).map(IoK8sApiAdmissionregistrationV1ExpressionWarningToJSON)),
    };
}

