/**
 * @amlplugins/google-campaign-manager-360
 *
 * Thin namespaced re-export of the native @googleapis/dfareporting SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Campaign Manager 360 (dfareporting).
 */

import * as _sdk from "@googleapis/dfareporting";
export * from "@googleapis/dfareporting";
export { _sdk as sdk };
export default _sdk;
