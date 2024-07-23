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

import { exists } from '../runtime';
import {
  IoK8sApiAdmissionregistrationV1MatchCondition,
  IoK8sApiAdmissionregistrationV1MatchConditionFromJSON,
  IoK8sApiAdmissionregistrationV1MatchConditionToJSON,
  IoK8sApiAdmissionregistrationV1RuleWithOperations,
  IoK8sApiAdmissionregistrationV1RuleWithOperationsFromJSON,
  IoK8sApiAdmissionregistrationV1RuleWithOperationsToJSON,
  IoK8sApiAdmissionregistrationV1WebhookClientConfig,
  IoK8sApiAdmissionregistrationV1WebhookClientConfigFromJSON,
  IoK8sApiAdmissionregistrationV1WebhookClientConfigToJSON,
  IoK8sApimachineryPkgApisMetaV1LabelSelector,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * ValidatingWebhook describes an admission webhook and the resources and operations it applies to.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1ValidatingWebhook
 */
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhook {
  /**
   * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
   * @type {Array<string>}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  admissionReviewVersions: Array<string>;
  /**
   *
   * @type {IoK8sApiAdmissionregistrationV1WebhookClientConfig}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfig;
  /**
   * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  failurePolicy?: string;
  /**
   * MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.
   *
   * The exact matching logic is (in order):
   *   1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.
   *   2. If ALL matchConditions evaluate to TRUE, the webhook is called.
   *   3. If any matchCondition evaluates to an error (but none are FALSE):
   *      - If failurePolicy=Fail, reject the request
   *      - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
   * @type {Array<IoK8sApiAdmissionregistrationV1MatchCondition>}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  matchConditions?: Array<IoK8sApiAdmissionregistrationV1MatchCondition>;
  /**
   * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
   *
   * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
   *
   * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
   *
   * Defaults to "Equivalent"
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  matchPolicy?: string;
  /**
   * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  name: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  objectSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  /**
   * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
   * @type {Array<IoK8sApiAdmissionregistrationV1RuleWithOperations>}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  rules?: Array<IoK8sApiAdmissionregistrationV1RuleWithOperations>;
  /**
   * SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  sideEffects: string;
  /**
   * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
   * @type {number}
   * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhook
   */
  timeoutSeconds?: number;
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1ValidatingWebhook {
  return IoK8sApiAdmissionregistrationV1ValidatingWebhookFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1ValidatingWebhook {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    admissionReviewVersions: json['admissionReviewVersions'],
    clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfigFromJSON(json['clientConfig']),
    failurePolicy: !exists(json, 'failurePolicy') ? undefined : json['failurePolicy'],
    matchConditions: !exists(json, 'matchConditions')
      ? undefined
      : (json['matchConditions'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1MatchConditionFromJSON,
        ),
    matchPolicy: !exists(json, 'matchPolicy') ? undefined : json['matchPolicy'],
    name: json['name'],
    namespaceSelector: !exists(json, 'namespaceSelector')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['namespaceSelector']),
    objectSelector: !exists(json, 'objectSelector')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['objectSelector']),
    rules: !exists(json, 'rules')
      ? undefined
      : (json['rules'] as Array<any>).map(
          IoK8sApiAdmissionregistrationV1RuleWithOperationsFromJSON,
        ),
    sideEffects: json['sideEffects'],
    timeoutSeconds: !exists(json, 'timeoutSeconds') ? undefined : json['timeoutSeconds'],
  };
}

export function IoK8sApiAdmissionregistrationV1ValidatingWebhookToJSON(
  value?: IoK8sApiAdmissionregistrationV1ValidatingWebhook | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    admissionReviewVersions: value.admissionReviewVersions,
    clientConfig: IoK8sApiAdmissionregistrationV1WebhookClientConfigToJSON(value.clientConfig),
    failurePolicy: value.failurePolicy,
    matchConditions:
      value.matchConditions === undefined
        ? undefined
        : (value.matchConditions as Array<any>).map(
            IoK8sApiAdmissionregistrationV1MatchConditionToJSON,
          ),
    matchPolicy: value.matchPolicy,
    name: value.name,
    namespaceSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.namespaceSelector),
    objectSelector: IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.objectSelector),
    rules:
      value.rules === undefined
        ? undefined
        : (value.rules as Array<any>).map(IoK8sApiAdmissionregistrationV1RuleWithOperationsToJSON),
    sideEffects: value.sideEffects,
    timeoutSeconds: value.timeoutSeconds,
  };
}
