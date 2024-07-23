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
/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
 */
export interface IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
  /**
   * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  apiVersion?: string;
  /**
   * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  fieldsType?: string;
  /**
   * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
   *
   * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
   *
   * The exact format is defined in sigs.k8s.io/structured-merge-diff
   * @type {object}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  fieldsV1?: object;
  /**
   * Manager is an identifier of the workflow managing these fields.
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  manager?: string;
  /**
   * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  operation?: string;
  /**
   * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  subresource?: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
   */
  time?: string;
}

export function IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON(
  json: any,
): IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
  return IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    fieldsType: !exists(json, 'fieldsType') ? undefined : json['fieldsType'],
    fieldsV1: !exists(json, 'fieldsV1') ? undefined : json['fieldsV1'],
    manager: !exists(json, 'manager') ? undefined : json['manager'],
    operation: !exists(json, 'operation') ? undefined : json['operation'],
    subresource: !exists(json, 'subresource') ? undefined : json['subresource'],
    time: !exists(json, 'time') ? undefined : json['time'],
  };
}

export function IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON(
  value?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    fieldsType: value.fieldsType,
    fieldsV1: value.fieldsV1,
    manager: value.manager,
    operation: value.operation,
    subresource: value.subresource,
    time: value.time === undefined ? undefined : value.time,
  };
}
