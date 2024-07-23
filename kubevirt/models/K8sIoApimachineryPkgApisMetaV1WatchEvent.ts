/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Event represents a single event to a watched resource.
 * @export
 * @interface K8sIoApimachineryPkgApisMetaV1WatchEvent
 */
export interface K8sIoApimachineryPkgApisMetaV1WatchEvent {
  /**
   * RawExtension is used to hold extensions in external versions.
   *
   * To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
   *
   * // Internal package:
   *
   * 	type MyAPIObject struct {
   * 		runtime.TypeMeta `json:",inline"`
   * 		MyPlugin runtime.Object `json:"myPlugin"`
   * 	}
   *
   * 	type PluginA struct {
   * 		AOption string `json:"aOption"`
   * 	}
   *
   * // External package:
   *
   * 	type MyAPIObject struct {
   * 		runtime.TypeMeta `json:",inline"`
   * 		MyPlugin runtime.RawExtension `json:"myPlugin"`
   * 	}
   *
   * 	type PluginA struct {
   * 		AOption string `json:"aOption"`
   * 	}
   *
   * // On the wire, the JSON will look something like this:
   *
   * 	{
   * 		"kind":"MyAPIObject",
   * 		"apiVersion":"v1",
   * 		"myPlugin": {
   * 			"kind":"PluginA",
   * 			"aOption":"foo",
   * 		},
   * 	}
   *
   * So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
   * @type {object}
   * @memberof K8sIoApimachineryPkgApisMetaV1WatchEvent
   */
  object: object;
  /**
   *
   * @type {string}
   * @memberof K8sIoApimachineryPkgApisMetaV1WatchEvent
   */
  type: string;
}

export function K8sIoApimachineryPkgApisMetaV1WatchEventFromJSON(
  json: any,
): K8sIoApimachineryPkgApisMetaV1WatchEvent {
  return K8sIoApimachineryPkgApisMetaV1WatchEventFromJSONTyped(json, false);
}

export function K8sIoApimachineryPkgApisMetaV1WatchEventFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): K8sIoApimachineryPkgApisMetaV1WatchEvent {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    object: json['object'],
    type: json['type'],
  };
}

export function K8sIoApimachineryPkgApisMetaV1WatchEventToJSON(
  value?: K8sIoApimachineryPkgApisMetaV1WatchEvent | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    object: value.object,
    type: value.type,
  };
}
