(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{644:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"transaction-lifecycle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-lifecycle"}},[e._v("#")]),e._v(" Transaction Lifecycle")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("This document describes the lifecycle of a transaction from creation to committed state changes on the EVM.")]),e._v(" "),n("h2",{attrs:{id:"pre-requisite-readings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),n("ul",[n("li",{attrs:{prereq:""}},[n("a",{attrs:{href:"https://docs.cosmos.network/master/basics/tx-lifecycle.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK transaction lifecycle"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"routing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[e._v("#")]),e._v(" Routing")]),e._v(" "),n("p",[e._v("Haqq needs to parse and handle transactions routed for both the EVM and for Cosmos SDK modules. We\nattempt to achieve this by mimicking "),n("a",{attrs:{href:"https://github.com/ethereum/go-ethereum",target:"_blank",rel:"noopener noreferrer"}},[e._v("geth's"),n("OutboundLink")],1),e._v(" "),n("code",[e._v("Transaction")]),e._v("\nstructure and treat it as a unique Cosmos SDK message type. An Ethereum transaction is a single\n"),n("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/types#Msg",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("sdk.Msg")]),n("OutboundLink")],1),e._v(". All relevant Ethereum\ntransaction information is contained in this message. This includes the signature, gas, payload,\namount, etc.")]),e._v(" "),n("p",[e._v("Being that Haqq implements the Tendermint ABCI application interface, as transactions are\nconsumed, they are passed through a series of handlers. Once such handler, the "),n("code",[e._v("AnteHandler")]),e._v(", is\nresponsible for performing preliminary message execution business logic such as fee payment,\nsignature verification, etc. This is particular to Cosmos SDK routed transactions. Ethereum routed\ntransactions will bypass this as the EVM handles the same business logic.")]),e._v(" "),n("p",[e._v("All EVM transactions are "),n("RouterLink",{attrs:{to:"/core/encoding.html#rlp"}},[e._v("RLP")]),e._v(" encoded using a custom tx encoder.")],1),e._v(" "),n("h2",{attrs:{id:"signers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signers"}},[e._v("#")]),e._v(" Signers")]),e._v(" "),n("p",[e._v("The signature processing and verification in Ethereum is performed by the "),n("code",[e._v("Signer")]),e._v(" interface. The\nprotocol supports different signer types based on the chain configuration params and the block number.")]),e._v(" "),n("p",[n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2lnbmVyIGVuY2Fwc3VsYXRlcyB0cmFuc2FjdGlvbiBzaWduYXR1cmUgaGFuZGxpbmcuIFRoZSBuYW1lIG9mIHRoaXMgdHlwZSBpcyBzbGlnaHRseQovLyBtaXNsZWFkaW5nIGJlY2F1c2UgU2lnbmVycyBkb24ndCBhY3R1YWxseSBzaWduLCB0aGV5J3JlIGp1c3QgZm9yIHZhbGlkYXRpbmcgYW5kCi8vIHByb2Nlc3Npbmcgb2Ygc2lnbmF0dXJlcy4KLy8KLy8gTm90ZSB0aGF0IHRoaXMgaW50ZXJmYWNlIGlzIG5vdCBhIHN0YWJsZSBBUEkgYW5kIG1heSBjaGFuZ2UgYXQgYW55IHRpbWUgdG8gYWNjb21tb2RhdGUKLy8gbmV3IHByb3RvY29sIHJ1bGVzLgp0eXBlIFNpZ25lciBpbnRlcmZhY2UgewoJLy8gU2VuZGVyIHJldHVybnMgdGhlIHNlbmRlciBhZGRyZXNzIG9mIHRoZSB0cmFuc2FjdGlvbi4KCVNlbmRlcih0eCAqVHJhbnNhY3Rpb24pIChjb21tb24uQWRkcmVzcywgZXJyb3IpCgoJLy8gU2lnbmF0dXJlVmFsdWVzIHJldHVybnMgdGhlIHJhdyBSLCBTLCBWIHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZQoJLy8gZ2l2ZW4gc2lnbmF0dXJlLgoJU2lnbmF0dXJlVmFsdWVzKHR4ICpUcmFuc2FjdGlvbiwgc2lnIFtdYnl0ZSkgKHIsIHMsIHYgKmJpZy5JbnQsIGVyciBlcnJvcikKCUNoYWluSUQoKSAqYmlnLkludAoKCS8vIEhhc2ggcmV0dXJucyAnc2lnbmF0dXJlIGhhc2gnLCBpLmUuIHRoZSB0cmFuc2FjdGlvbiBoYXNoIHRoYXQgaXMgc2lnbmVkIGJ5IHRoZQoJLy8gcHJpdmF0ZSBrZXkuIFRoaXMgaGFzaCBkb2VzIG5vdCB1bmlxdWVseSBpZGVudGlmeSB0aGUgdHJhbnNhY3Rpb24uCglIYXNoKHR4ICpUcmFuc2FjdGlvbikgY29tbW9uLkhhc2gKCgkvLyBFcXVhbCByZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHNpZ25lciBpcyB0aGUgc2FtZSBhcyB0aGUgcmVjZWl2ZXIuCglFcXVhbChTaWduZXIpIGJvb2wKfQ=="}})],1),e._v(" "),n("p",[e._v("Haqq supports all Ethereum "),n("code",[e._v("Signer")]),e._v("s up to the latest go-ethereum version (London, Berlin,\nEIP155, Homestead and Frontier). The chain will generate the latest "),n("code",[e._v("Signer")]),e._v(" type depending on the\n"),n("code",[e._v("ChainConfig")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);