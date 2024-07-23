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
 * CustomResourceColumnDefinition specifies a column for server side printing.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition {
  /**
   * description is a human readable description of this column.
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
   */
  description?: string;
  /**
   * format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
   */
  format?: string;
  /**
   * jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
   */
  jsonPath: string;
  /**
   * name is a human readable name for the column.
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
   */
  name: string;
  /**
   * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
   * @type {number}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
   */
  priority?: number;
  /**
   * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition
   */
  type: string;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionFromJSON(
  json: any,
): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition {
  return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    description: !exists(json, 'description') ? undefined : json['description'],
    format: !exists(json, 'format') ? undefined : json['format'],
    jsonPath: json['jsonPath'],
    name: json['name'],
    priority: !exists(json, 'priority') ? undefined : json['priority'],
    type: json['type'],
  };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionToJSON(
  value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    description: value.description,
    format: value.format,
    jsonPath: value.jsonPath,
    name: value.name,
    priority: value.priority,
    type: value.type,
  };
}
