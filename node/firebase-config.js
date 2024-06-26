// const admin = require('firebase-admin');
// // const serviceAccount = require('./serviceAccount.json');

// const serviceAccount={
//   "type": "service_account",
//   "project_id": "theapartment-140d6",
//   "private_key_id": "f39a53696e1257c8131c651f959078a8f4a4d11b",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2Gj+wEZXNlP9r\nA3xoiwJDX92/i1YCV0hMvOqeHGtdM3KtjAOaJwwSiPZsTjgTbqEXRQnk0AsS0Vo0\n3wUybbLpcNSOkWvTuBgV2PZnYiAa1fIUVBSiMAxG3GHBvb0a9Wx8MMdmtZVTZTeM\njUn2F7UiUk+WE5nQmoUmFTHNXpaEQTUDezWEb1atMhTuEsA1W9tStkpg2lhewUyi\n3iAhiA2vefEvkyMO8tR2mtCE2v/GlxXcWIcL2caCBYQKNaVGd2IuubMWr+6BS7R7\nKXiENpbuS8IcLEsKOtU/m2MM6f5aLohhVRNMWjyyLeIwYDYqbuAdLNoOYF9iyIr9\nxVkezxQ5AgMBAAECggEAERmYqK3UD36p9/h3NKF2FFHSosegq15bHJKiZPfF+LXp\ns0SKO43mXzCzlDLJpwB82dCqt8z19z3Hvt6A8E33Dp8A5MTg11wqjdWmeMmQ+ngj\n7/b/y4Wfx4EvIFhzAy6v8d8KQHm1dKP08gq7+uMZyCfqz4zWZS13ap6zoyV6VJ+a\n4A2WWOiB8tlck63+k2bhPXL55Gw7KWMkq8VcCiMfpIWDrhXl2nUl4VuWE4u6mnTI\nxrw0iNbPjHF8fozupuY8PXZ8eVm6oJrDhpdFmzzPllZwJGVtMwe8TdsuEJ4r7hOS\nQ4jmcPZ4eGC+PN9/PTzkmP/gCpUibUllRuvW2EfgcQKBgQDYJ0RIfN0/mYlEmogj\n0PGeIZ3qThTdkEcGRqqyWSmeUcikUIcXkI3P1XZNMplQEb8MovGCtrbXcYgif7+y\n2FQAk+c7YpZKznZqXa0jRVp3NZu81HwH41GzKwHvrtQ+oaQ70JBE4j+U/XAC8fxr\n+ukKVCL7R5Rt/Wxd0oYJCmpM8QKBgQDXrAz6dJ73K/s+V1rodW4zVxNhNLSDusiq\nAGnThXuUFfyK+nJSVLfrYmYBui/q8eDRtJ3mTVU1t/kEtpAf5ME1iKJkqIsEGpqs\nHwXXy67t/WrBYhm4T0d2t+oONEDfrxOcV1ChBA1Qtw6enGrzTQFSHGb9uNvyiwzV\n9f3fg+9byQKBgBvUgnAq03m61PemRd0Gq/VGMsTWJM2aI+rk8llgLYGa2hB95cbc\n78VQoJiz6RVsE4MW/61qxQPcNEDs3cuzGq2wXVdCDEO5bXmocgBWj51Fo7WeThHd\n7Mj6wpcPlXgy66hf5BNaZgFS2Dco3O0yMwsHZjGgN7YpqOgzkNpdIu6hAoGAdnGu\nzv2tL+GfoaUn7/JOCzQPGJtxZ8b03ShM9jWgoLtSbqEMl9qfB06K5vfxyP39ki23\nafueiFn5EHWSwXFICrZ3OQC3GBHkUBLZiqH5+AnszzepGGexv6lRiWt5FV95TatG\nRKeNCH8AMGuG8Qehag7fIQidAp8K9ZabTl2O3sECgYBd3zQ74W/BUkw4ECADgIel\nNRGEHWHmAUkPNRIFJt6kW0rNIrVAgdN/XT6DIE81YQ6sXsd4v9iw2hbhjo4Edasi\nS/rUsWaSde10tyGVwJFKjAxBY9isSdr0DlwktaVZY+6A/aA0iiiZojDyer4JNdle\nFLH6BiFpJHTILXI55ZI4bg==\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-pbdgr@theapartment-140d6.iam.gserviceaccount.com",
//   "client_id": "109593586861027727374",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pbdgr%40theapartment-140d6.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// };

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://theapartment-140d6-default-rtdb.firebaseio.com' 
// });

// const db = admin.database();
// module.exports = db;
