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


import * as runtime from '../runtime';
import {
    IoK8sApiAuthenticationV1alpha1SelfSubjectReview,
    IoK8sApiAuthenticationV1alpha1SelfSubjectReviewFromJSON,
    IoK8sApiAuthenticationV1alpha1SelfSubjectReviewToJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceList,
    IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceListToJSON,
} from '../models';

export interface CreateAuthenticationV1alpha1SelfSubjectReviewRequest {
    body: IoK8sApiAuthenticationV1alpha1SelfSubjectReview;
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
}

/**
 * 
 */
export class AuthenticationV1alpha1Api extends runtime.BaseAPI {

    /**
     * create a SelfSubjectReview
     */
    async createAuthenticationV1alpha1SelfSubjectReviewRaw(requestParameters: CreateAuthenticationV1alpha1SelfSubjectReviewRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApiAuthenticationV1alpha1SelfSubjectReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAuthenticationV1alpha1SelfSubjectReview.');
        }

        const queryParameters: any = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.fieldValidation !== undefined) {
            queryParameters['fieldValidation'] = requestParameters.fieldValidation;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authentication.k8s.io/v1alpha1/selfsubjectreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuthenticationV1alpha1SelfSubjectReviewToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuthenticationV1alpha1SelfSubjectReviewFromJSON(jsonValue));
    }

    /**
     * create a SelfSubjectReview
     */
    async createAuthenticationV1alpha1SelfSubjectReview(requestParameters: CreateAuthenticationV1alpha1SelfSubjectReviewRequest, initOverrides?: RequestInit): Promise<IoK8sApiAuthenticationV1alpha1SelfSubjectReview> {
        const response = await this.createAuthenticationV1alpha1SelfSubjectReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAuthenticationV1alpha1APIResourcesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authentication.k8s.io/v1alpha1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAuthenticationV1alpha1APIResources(initOverrides?: RequestInit): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getAuthenticationV1alpha1APIResourcesRaw(initOverrides);
        return await response.value();
    }

}
