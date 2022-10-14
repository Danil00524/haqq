(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{655:function(t,a,l){"use strict";l.r(a);var o=l(1),c=Object(o.a)({},(function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"tendermint-kms"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-kms"}},[t._v("#")]),t._v(" Tendermint KMS")]),t._v(" "),l("p",{attrs:{synopsis:""}},[t._v("Set up a Key Management System for Haqq")]),t._v(" "),l("p",[l("a",{attrs:{href:"https://github.com/iqlusioninc/tmkms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint KMS"),l("OutboundLink")],1),t._v(" is a Key Management Service (KMS) that allows separating key management from Tendermint nodes. In addition it provides other advantages such as:")]),t._v(" "),l("ul",[l("li",[t._v("Improved security and risk management policies")]),t._v(" "),l("li",[t._v("Unified API and support for various HSM (hardware security modules)")]),t._v(" "),l("li",[t._v("Double signing protection (software or hardware based)")])]),t._v(" "),l("p",[t._v("It is recommended that the KMS service runs in a separate physical hosts.")]),t._v(" "),l("h2",{attrs:{id:"prepare-tmkms-dependencies"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#prepare-tmkms-dependencies"}},[t._v("#")]),t._v(" Prepare TMKMS Dependencies")]),t._v(" "),l("p",[t._v("Start by opening the node you intend to run TMKMS (not the node you validate on) and install the following dependencies:\n"),l("br")]),t._v(" "),l("p",[l("strong",[t._v("Rust")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtLXByb3RvICc9aHR0cHMnIC0tdGxzdjEuMiAtc1NmIGh0dHBzOi8vc2gucnVzdHVwLnJzIHwgc2gK"}}),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c291cmNlICRIT01FLy5jYXJnby9lbnYK"}}),t._v(" "),l("br"),t._v(" "),l("p",[l("strong",[t._v("GCC")])]),t._v(" "),l("Tabs",{attrs:{type:"border-card"}},[l("Tab",{attrs:{label:"Ubuntu"}},[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c3VkbyBhcHQgdXBkYXRlCg=="}}),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c3VkbyBhcHQgaW5zdGFsbCBnaXQgYnVpbGQtZXNzZW50aWFsIHVmdyBjdXJsIGpxIHNuYXBkIC0teWVzCg=="}})],1),t._v(" "),l("Tab",{attrs:{label:"Mac"}},[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YnJldyBpbnN0YWxsIGdjYwo="}})],1)],1),t._v(" "),l("p",[l("strong",[t._v("Libusb")])]),t._v(" "),l("Tabs",{attrs:{type:"border-card"}},[l("Tab",{attrs:{label:"Ubuntu"}},[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YXB0IGluc3RhbGwgbGlidXNiLTEuMC0wLWRldgo="}})],1),t._v(" "),l("Tab",{attrs:{label:"Mac"}},[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YnJldyBpbnN0YWxsIGxpYnVzYgo="}})],1)],1),t._v(" "),l("br"),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",[t._v("If on x86_64 architecture:")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZXhwb3J0IFJVU1RGTEFHUz0tQ3RhcmdldC1mZWF0dXJlPSthZXMsK3Nzc2UzCg=="}}),t._v(" "),l("h2",{attrs:{id:"setup-tmkms"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#setup-tmkms"}},[t._v("#")]),t._v(" Setup TMKMS")]),t._v(" "),l("p",[t._v("In this example, we will be compiling from the github source code using the "),l("code",[t._v("--features=softsign")]),t._v(" flag, however you may use "),l("code",[t._v("--features=yubihsm")]),t._v(" if you want to use a yubikey (ledger support is not working properly at the moment, and this guide will not go into using yubihsm).")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2QgJEhPTUUKZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9pcWx1c2lvbmluYy90bWttcy5naXQKY2QgJEhPTUUvdG1rbXMKY2FyZ28gaW5zdGFsbCB0bWttcyAtLWZlYXR1cmVzPXNvZnRzaWduCnRta21zIGluaXQgY29uZmlnCnRta21zIHNvZnRzaWduIGtleWdlbiAuL2NvbmZpZy9zZWNyZXRzL3NlY3JldF9jb25uZWN0aW9uX2tleQo="}}),t._v(" "),l("p",[t._v("Now we will transfer your validator private key from your validator to your VM running TMKMS. You can do this manually or though scp. I will use scp in this example (the validator has the IP of 123.456.32.123):")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c2NwIHVzZXJAMTIzLjQ1Ni4zMi4xMjM6fi8uaGFxcWQvY29uZmlnL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uIH4vdG1rbXMvY29uZmlnL3NlY3JldHMK"}}),t._v(" "),l("p",[t._v("Then, import the private validator key into tmkms:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dG1rbXMgc29mdHNpZ24gaW1wb3J0ICRIT01FL3Rta21zL2NvbmZpZy9zZWNyZXRzL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uICRIT01FL3Rta21zL2NvbmZpZy9zZWNyZXRzL3ByaXZfdmFsaWRhdG9yX2tleQo="}}),t._v(" "),l("p",[t._v("Please note at this point, you could delete the "),l("code",[t._v("priv_validator_key.json")]),t._v(" from both your validator node and tmkms node and store it safely offline in case of an emergency. This newly created "),l("code",[t._v("priv_validator_key")]),t._v(" will be what TMKMS will use to sign for your validator.")]),t._v(" "),l("p",[t._v("Now, modify the "),l("code",[t._v("tmkms.toml")]),t._v(" file")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmFubyAkSE9NRS90bWttcy9jb25maWcvdG1rbXMudG9tbAo="}}),t._v(" "),l("p",[t._v("In this example, my validator has the IP address of 123.456.32.123 and we will be using port 688 to feed the validator key to the validator. We will also be using chain_id "),l("code",[t._v("haqq_11235-1")]),t._v(" for Haqq Mainnet, but if you are doing this on the testnet be sure to use "),l("code",[t._v("haqq_53211-1")]),t._v(" instead:")]),t._v(" "),l("h2",{attrs:{id:"chain-configuration"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#chain-configuration"}},[t._v("#")]),t._v(" Chain Configuration")]),t._v(" "),l("p",[l("strong",[t._v("tmkms.toml")])]),t._v(" "),l("Tabs",{attrs:{type:"border-card"}},[l("Tab",{attrs:{label:"Haqq Mainnet"}},[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBUZW5kZXJtaW50IEtNUyBjb25maWd1cmF0aW9uIGZpbGUKCiMjIENoYWluIENvbmZpZ3VyYXRpb24KCiMjIyBDb3Ntb3MgSHViIE5ldHdvcmsKCltbY2hhaW5dXQppZCA9ICZxdW90O2hhcXFfMTEyMzUtMSZxdW90OwprZXlfZm9ybWF0ID0geyB0eXBlID0gJnF1b3Q7Y29zbW9zLWpzb24mcXVvdDssIGFjY291bnRfa2V5X3ByZWZpeCA9ICZxdW90O2hhcXFwdWImcXVvdDssIGNvbnNlbnN1c19rZXlfcHJlZml4ID0gJnF1b3Q7aGFxcXZhbGNvbnNwdWImcXVvdDsgfQpzdGF0ZV9maWxlID0gJnF1b3Q7L3Jvb3QvdG1rbXMvY29uZmlnL3N0YXRlL3ByaXZfdmFsaWRhdG9yX3N0YXRlLmpzb24mcXVvdDsKCiMjIFNpZ25pbmcgUHJvdmlkZXIgQ29uZmlndXJhdGlvbgoKIyMjIFNvZnR3YXJlLWJhc2VkIFNpZ25lciBDb25maWd1cmF0aW9uCgpbW3Byb3ZpZGVycy5zb2Z0c2lnbl1dCmNoYWluX2lkcyA9IFsmcXVvdDtoYXFxXzExMjM1LTEmcXVvdDtdCmtleV90eXBlID0gJnF1b3Q7Y29uc2Vuc3VzJnF1b3Q7CnBhdGggPSAmcXVvdDsvcm9vdC90bWttcy9jb25maWcvc2VjcmV0cy9wcml2X3ZhbGlkYXRvcl9rZXkmcXVvdDsKCiMjIFZhbGlkYXRvciBDb25maWd1cmF0aW9uCgpbW3ZhbGlkYXRvcl1dCmNoYWluX2lkID0gJnF1b3Q7aGFxcV8xMTIzNS0xJnF1b3Q7CmFkZHIgPSAmcXVvdDt0Y3A6Ly8xMjMuNDU2LjMyLjEyMzo2ODgmcXVvdDsgIyB5b3VyIHZhbGlkYXRvciBub2RlIGlwIGFuZCBwb3J0CnNlY3JldF9rZXkgPSAmcXVvdDsvcm9vdC90bWttcy9jb25maWcvc2VjcmV0cy9zZWNyZXRfY29ubmVjdGlvbl9rZXkmcXVvdDsKcHJvdG9jb2xfdmVyc2lvbiA9ICZxdW90O3YwLjM0JnF1b3Q7CnJlY29ubmVjdCA9IHRydWUKCg=="}})],1),t._v(" "),l("Tab",{attrs:{label:"Haqq TestEdge"}},[l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBUZW5kZXJtaW50IEtNUyBjb25maWd1cmF0aW9uIGZpbGUKCiMjIENoYWluIENvbmZpZ3VyYXRpb24KCiMjIyBDb3Ntb3MgSHViIE5ldHdvcmsKCltbY2hhaW5dXQppZCA9ICZxdW90O2hhcXFfNTMyMTEtMSZxdW90OwprZXlfZm9ybWF0ID0geyB0eXBlID0gJnF1b3Q7Y29zbW9zLWpzb24mcXVvdDssIGFjY291bnRfa2V5X3ByZWZpeCA9ICZxdW90O2hhcXFwdWImcXVvdDssIGNvbnNlbnN1c19rZXlfcHJlZml4ID0gJnF1b3Q7aGFxcXZhbGNvbnNwdWImcXVvdDsgfQpzdGF0ZV9maWxlID0gJnF1b3Q7L3Jvb3QvdG1rbXMvY29uZmlnL3N0YXRlL3ByaXZfdmFsaWRhdG9yX3N0YXRlLmpzb24mcXVvdDsKCiMjIFNpZ25pbmcgUHJvdmlkZXIgQ29uZmlndXJhdGlvbgoKIyMjIFNvZnR3YXJlLWJhc2VkIFNpZ25lciBDb25maWd1cmF0aW9uCgpbW3Byb3ZpZGVycy5zb2Z0c2lnbl1dCmNoYWluX2lkcyA9IFsmcXVvdDtoYXFxXzUzMjExLTEmcXVvdDtdCmtleV90eXBlID0gJnF1b3Q7Y29uc2Vuc3VzJnF1b3Q7CnBhdGggPSAmcXVvdDsvcm9vdC90bWttcy9jb25maWcvc2VjcmV0cy9wcml2X3ZhbGlkYXRvcl9rZXkmcXVvdDsKCiMjIFZhbGlkYXRvciBDb25maWd1cmF0aW9uCgpbW3ZhbGlkYXRvcl1dCmNoYWluX2lkID0gJnF1b3Q7aGFxcV81MzIxMS0xJnF1b3Q7CmFkZHIgPSAmcXVvdDt0Y3A6Ly8xMjMuNDU2LjMyLjEyMzo2ODgmcXVvdDsgIyB5b3VyIHZhbGlkYXRvciBub2RlIGlwIGFuZCBwb3J0CnNlY3JldF9rZXkgPSAmcXVvdDsvcm9vdC90bWttcy9jb25maWcvc2VjcmV0cy9zZWNyZXRfY29ubmVjdGlvbl9rZXkmcXVvdDsKcHJvdG9jb2xfdmVyc2lvbiA9ICZxdW90O3YwLjM0JnF1b3Q7CnJlY29ubmVjdCA9IHRydWUKCg=="}})],1)],1),t._v(" "),l("p",[t._v("Now, modify your validators "),l("code",[t._v("config.toml")]),t._v(" to use the port you selected in the "),l("code",[t._v("tmkms.toml")]),t._v(" file:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bmFubyAkSE9NRS8uaGFxcWQvY29uZmlnL2NvbmZpZy50b21sCg=="}}),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"cHJpdl92YWxpZGF0b3JfbGFkZHIgPSAmcXVvdDt0Y3A6Ly8wLjAuMC4wOjY4OCZxdW90Owo="}}),t._v(" "),l("p",[t._v("It is also recommended to comment out the "),l("code",[t._v("priv_validator_key_file")]),t._v(" line and the "),l("code",[t._v("priv_validator_state_file")]),t._v(" line:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBQYXRoIHRvIHRoZSBKU09OIGZpbGUgY29udGFpbmluZyB0aGUgcHJpdmF0ZSBrZXkgdG8gdXNlIGFzIGEgdmFsaWRhdG9yIGluIHRoZSBjb25zZW5zdXMgcHJvdG9jb2wKIyBwcml2X3ZhbGlkYXRvcl9rZXlfZmlsZSA9ICZxdW90O2NvbmZpZy9wcml2X3ZhbGlkYXRvcl9rZXkuanNvbiZxdW90OwoKIyBQYXRoIHRvIHRoZSBKU09OIGZpbGUgY29udGFpbmluZyB0aGUgbGFzdCBzaWduIHN0YXRlIG9mIGEgdmFsaWRhdG9yCiMgcHJpdl92YWxpZGF0b3Jfc3RhdGVfZmlsZSA9ICZxdW90O2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbiZxdW90Owo="}}),t._v(" "),l("p",[t._v("Next, stop the validator. Move back to your VM running TMKMS and start it:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dG1rbXMgc3RhcnQgLWMgJEhPTUUvdG1rbXMvY29uZmlnL3Rta21zLnRvbWwK"}}),t._v(" "),l("p",[t._v("You will see error logs like the following:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"log",base64:"MjAyMi0wMy0wOFQyMzo0MjozNy45MjY4MTZaICBJTkZPIHRta21zOjpjb21tYW5kczo6c3RhcnQ6IHRta21zIDAuMTIuMiBzdGFydGluZyB1cC4uLgoyMDIyLTAzLTA4VDIzOjQyOjM3LjkyNjk2OFogIElORk8gdG1rbXM6OmtleXJpbmc6IFtrZXlyaW5nOnNvZnRzaWduXSBhZGRlZCBjb25zZW5zdXMgRWQyNTUxOSBrZXk6IGhhcXF2YWxjb25zcHViMXpjamR1ZXBxMnFma3AzYWhyaGFhZnp1cWdsbWU5bWFyZXMwZWx1ajU4eHI2Y3k3YzM3Y2RtenEwZWVjcWsweWVocgoyMDIyLTAzLTA4VDIzOjQyOjM3LjkyNzIxNlogIElORk8gdG1rbXM6OmNvbm5lY3Rpb246OnRjcDogS01TIG5vZGUgSUQ6IDk0OGY4ZmVlODNmNzcxNWY5OWI4YjhhNTNkNzQ2ZWYwMGU3YjBkOWUKMjAyMi0wMy0wOFQyMzo0MjozNy45Mjk0NTRaIEVSUk9SIHRta21zOjpjbGllbnQ6IFtoYXFxXzExMjM1LTFAdGNwOi8vMTIzLjQ1Ni4zMi4xMjM6Njg4XSBJL08gZXJyb3I6IENvbm5lY3Rpb24gcmVmdXNlZCAob3MgZXJyb3IgMTExKQoyMDIyLTAzLTA4VDIzOjQyOjM4LjkyOTc0NlogIElORk8gdG1rbXM6OmNvbm5lY3Rpb246OnRjcDogS01TIG5vZGUgSUQ6IDk0OGY4ZmVlODNmNzcxNWY5OWI4YjhhNTNkNzQ2ZWYwMGU3YjBkOWUKMjAyMi0wMy0wOFQyMzo0MjozOC45MzE0MjhaIEVSUk9SIHRta21zOjpjbGllbnQ6IFtoYXFxXzExMjM1LTFAdGNwOi8vMTIzLjQ1Ni4zMi4xMjM6Njg4XSBJL08gZXJyb3I6IENvbm5lY3Rpb24gcmVmdXNlZCAob3MgZXJyb3IgMTExKQoyMDIyLTAzLTA4VDIzOjQyOjM5LjkzMTcyOVogIElORk8gdG1rbXM6OmNvbm5lY3Rpb246OnRjcDogS01TIG5vZGUgSUQ6IDk0OGY4ZmVlODNmNzcxNWY5OWI4YjhhNTNkNzQ2ZWYwMGU3YjBkOWUKMjAyMi0wMy0wOFQyMzo0MjozOS45MzI0MTdaIEVSUk9SIHRta21zOjpjbGllbnQ6IFtoYXFxXzExMjM1LTFAdGNwOi8vMTIzLjQ1Ni4zMi4xMjM6Njg4XSBJL08gZXJyb3I6IENvbm5lY3Rpb24gcmVmdXNlZCAob3MgZXJyb3IgMTExKQoyMDIyLTAzLTA4VDIzOjQyOjQwLjkzMjczMlogIElORk8gdG1rbXM6OmNvbm5lY3Rpb246OnRjcDogS01TIG5vZGUgSUQ6IDk0OGY4ZmVlODNmNzcxNWY5OWI4YjhhNTNkNzQ2ZWYwMGU3YjBkOWUKMjAyMi0wMy0wOFQyMzo0Mjo0MC45MzM0MjVaIEVSUk9SIHRta21zOjpjbGllbnQ6IFtoYXFxXzExMjM1LTFAdGNwOi8vMTIzLjQ1Ni4zMi4xMjM6Njg4XSBJL08gZXJyb3I6IENvbm5lY3Rpb24gcmVmdXNlZCAob3MgZXJyb3IgMTExKQo="}}),t._v(" "),l("p",[t._v("Now, start your chornic validator on the validator node:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"aGFxcWQgc3RhcnQK"}}),t._v(" "),l("p",[t._v("Your TMKMS node will now show logs like the following:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"log",base64:"MjAyMi0wMy0wOFQyMzo0NjowNi4yMDg0NTFaICBJTkZPIHRta21zOjpjb25uZWN0aW9uOjp0Y3A6IEtNUyBub2RlIElEOiA5NDhmOGZlZTgzZjc3MTVmOTliOGI4YTUzZDc0NmVmMDBlN2IwZDllCjIwMjItMDMtMDhUMjM6NDY6MDYuMjEwNTY4WiAgSU5GTyB0bWttczo6c2Vzc2lvbjogW2hhcXFfMTEyMzUtMUB0Y3A6Ly8xNjQuOTIuMTM2LjE2MDo2ODhdIGNvbm5lY3RlZCB0byB2YWxpZGF0b3Igc3VjY2Vzc2Z1bGx5CjIwMjItMDMtMDhUMjM6NDY6MDYuMjEwNjA0WiAgV0FSTiB0bWttczo6c2Vzc2lvbjogW2hhcXFfMTEyMzUtMUB0Y3A6Ly8xNjQuOTIuMTM2LjE2MDo2ODhdOiB1bnZlcmlmaWVkIHZhbGlkYXRvciBwZWVyIElEISAoYmE0NGRkMzY4OTk2MDJlMjU1YjA0ZTM2MDhlNWVmMGZlNGJjNWY1YikKMjAyMi0wMy0wOFQyMzo0NjoxNS45Mjk3ODdaICBJTkZPIHRta21zOjpzZXNzaW9uOiBbaGFxcV8xMTIzNS0xQHRjcDovLzE2NC45Mi4xMzYuMTYwOjY4OF0gc2lnbmVkIFByZUNvbW1pdDombHQ7bmlsJmd0OyBhdCBoL3IvcyAzMzk5OTEwLzAvMiAoMCBtcykKMjAyMi0wMy0wOFQyMzo0NjoxNy4zNDQ1NzlaICBJTkZPIHRta21zOjpzZXNzaW9uOiBbaGFxcV8xMTIzNS0xQHRjcDovLzE2NC45Mi4xMzYuMTYwOjY4OF0gc2lnbmVkIFByZUNvbW1pdDombHQ7bmlsJmd0OyBhdCBoL3IvcyAzMzk5OTExLzAvMiAoMCBtcykKMjAyMi0wMy0wOFQyMzo0NjoyMi4zNjc2MjdaICBJTkZPIHRta21zOjpzZXNzaW9uOiBbaGFxcV8xMTIzNS0xQHRjcDovLzE2NC45Mi4xMzYuMTYwOjY4OF0gc2lnbmVkIFByZUNvbW1pdDombHQ7bmlsJmd0OyBhdCBoL3IvcyAzMzk5OTEyLzAvMiAoMCBtcykKMjAyMi0wMy0wOFQyMzo0NjoyNy40MDk3NzdaICBJTkZPIHRta21zOjpzZXNzaW9uOiBbaGFxcV8xMTIzNS0xQHRjcDovLzE2NC45Mi4xMzYuMTYwOjY4OF0gc2lnbmVkIFByZUNvbW1pdDombHQ7bmlsJmd0OyBhdCBoL3IvcyAzMzk5OTEzLzAvMiAoMCBtcykKMjAyMi0wMy0wOFQyMzo0NjozMi40NDIzMDBaICBJTkZPIHRta21zOjpzZXNzaW9uOiBbaGFxcV8xMTIzNS0xQHRjcDovLzE2NC45Mi4xMzYuMTYwOjY4OF0gc2lnbmVkIFByZUNvbW1pdDombHQ7bmlsJmd0OyBhdCBoL3IvcyAzMzk5OTE0LzAvMiAoMCBtcykKMjAyMi0wMy0wOFQyMzo0NjozNy40NTIxNjJaICBJTkZPIHRta21zOjpzZXNzaW9uOiBbaGFxcV8xMTIzNS0xQHRjcDovLzE2NC45Mi4xMzYuMTYwOjY4OF0gc2lnbmVkIFByZUNvbW1pdDombHQ7bmlsJmd0OyBhdCBoL3IvcyAzMzk5OTE1LzAvMiAoMCBtcykK"}}),t._v(" "),l("p",[t._v("You should now be signing blocks! If you cancel the TMKMS process, you will no longer sign blocks and will stop syncing. If you restart the TMKMS process, your validator node will continue to sync from where it left off.")]),t._v(" "),l("h2",{attrs:{id:"final-notes"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#final-notes"}},[t._v("#")]),t._v(" Final Notes")]),t._v(" "),l("p",[t._v("Please note that this is a bare minimum setup. More robust settings such as setting up a firewall to only allow your TMKMS node to get through the priv_validator_laddr port would make your validator even more secure.")])],1)}),[],!1,null,null,null);a.default=c.exports}}]);