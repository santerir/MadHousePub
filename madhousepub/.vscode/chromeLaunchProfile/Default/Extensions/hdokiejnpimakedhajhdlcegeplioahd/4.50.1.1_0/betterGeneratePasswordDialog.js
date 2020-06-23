var BetterGeneratePasswordDialog=function(e){VaultItemDialog.call(this,e,{additionalHeaderClasses:["icon","leftIcon"],dynamicHeight:!0,hideHeader:!1,responsive:!1,closeButtonEnabled:!0,title:Strings.translateString("Generate"),confirmOnClose:!1,overlayDialog:!0,hideButtons:!0})};BetterGeneratePasswordDialog.prototype=Object.create(Dialog.prototype),(BetterGeneratePasswordDialog.prototype.constructor=BetterGeneratePasswordDialog).prototype.open=function(e){!0===(e=$.extend(e,{defaultData:{length:bg.Preferences.get("generate_length"),minimumLengthByPolicy:0,uppercase:bg.Preferences.get("generate_upper"),lowercase:bg.Preferences.get("generate_lower"),numeric:bg.Preferences.get("generate_digits"),special:bg.Preferences.get("generate_special"),avoidAmbiguous:bg.Preferences.get("generate_ambig"),pronounceable:bg.Preferences.get("generate_pronounceable"),allCombos:bg.Preferences.get("generate_allcombos")}})).defaultData.avoidAmbiguous&&!0===e.defaultData.pronounceable&&(e.defaultData.avoidAmbiguous=!1,e.defaultData.pronounceable=!1,e.defaultData.allCombos=!0),Dialog.prototype.open.call(this,e)},BetterGeneratePasswordDialog.prototype.configureEasyToSay=function(e){return this.inputFields.numeric.setValue(!e),this.inputFields.special.setValue(!e),e?(this.inputFields.numeric.disable(),this.inputFields.special.disable(),this.inputFields.pronounceable.setValue(!0),this.inputFields.avoidAmbiguous.setValue(!1),this.inputFields.allCombos.setValue(!1)):(this.inputFields.numeric.enable(),this.inputFields.special.enable()),!1},BetterGeneratePasswordDialog.prototype.configureEasyToRead=function(e){return e&&(this.inputFields.numeric.enable(),this.inputFields.special.enable(),this.inputFields.avoidAmbiguous.setValue(!0),this.inputFields.pronounceable.setValue(!1),this.inputFields.allCombos.setValue(!1)),!1},BetterGeneratePasswordDialog.prototype.configureAllCombos=function(e,t){return e&&(this.inputFields.numeric.enable(),this.inputFields.special.enable(),this.inputFields.uppercase.enable(),this.inputFields.lowercase.enable(),t&&(this.inputFields.numeric.setValue(!0),this.inputFields.special.setValue(!0),this.inputFields.uppercase.setValue(!0),this.inputFields.lowercase.setValue(!0)),this.inputFields.avoidAmbiguous.setValue(!1),this.inputFields.pronounceable.setValue(!1),this.inputFields.allCombos.setValue(!0)),!1},BetterGeneratePasswordDialog.prototype.updateLength=function(e){return e=Math.max(e,this.data.defaultData.minimumLengthByPolicy).toString(),this.inputFields.length.getValue()!==e&&this.inputFields.length.setValue(e),this.inputFields.lengthInput.getValue()!==e&&this.inputFields.lengthInput.setValue(e),$("#sliderFill").width(e+"%"),!1},BetterGeneratePasswordDialog.prototype.updatePasswordLengthOptions=function(){var e=Math.max(4,this.data.defaultData.minimumLengthByPolicy);this.inputFields.length.input[0].min=e;var t=Math.max(this.data.defaultData.length,e);this.inputFields.length.setValue(t.toString()),this.inputFields.lengthInput.setValue(t.toString())},BetterGeneratePasswordDialog.prototype.initialize=function(){Dialog.prototype.initialize.apply(this,arguments),this.inputFields.password.getElement().LP_addPasswordMeter(null,null,!0),LPFeatures.allowClipboardCopy()||($("#copyPassword").LP_hide(),$("#fillPasswordButton").LP_hide(),$("#btnCopy").LP_hide()),function(t){t.inputFields.password.getElement().on("copy",function(){t.setCopiedGeneratedPassword(t.inputFields.password.getValue())}),$(".iconMoreInfo").hover(function(){$(this).children().fadeIn(200)},function(){$(this).children().fadeOut(100)}),$("#generateBtn").unbind("click"),$("#generateBtn").bind("click",function(){t.submit()}),$("#showHistory").bind("click",function(){t.toggleHistory(t.data.saveOptions.source)}),$("#clearHistory").bind("click",function(){$("#historyBody").empty(),$("#historyTable").hide(),$("#historyEmptyState").show(),bg.GenPassHistory.clear(),bg.sendLpImprove("historycleared",{source:t.data.saveOptions.source})}),$("#length").bind("input",function(){t.setupComplete&&t.updateLength(t.inputFields.length.getValue())}),t.inputFields.lengthInput.onChange(function(){t.setupComplete&&t.updateLength(t.inputFields.lengthInput.getValue())});var e=function(){var e=t.inputFields.password.getValue();LPProxy.copyGeneratedPassword(e,t.data.saveOptions.source,$("#generatedPasswordCount").val()),t.setCopiedGeneratedPassword(e),"function"==typeof t.data.onCopy?t.data.onCopy():t.close()};LPPlatform.addEventListener(document.getElementById("btnCopy"),"click",e),$("#fillPasswordButton").unbind("click"),t.data.saveOptions&&"icon"===t.data.saveOptions.source?$("#fillPasswordButton").bind("click",function(){t.usePassword()}):($("#fillPasswordButton").text(Strings.Vault.COPY_PASSWORD),$("#fillPasswordButton").bind("click",e)),t.inputFields.pronounceable.onChange(function(e){t.setupComplete&&t.configureEasyToSay(e)}),t.inputFields.avoidAmbiguous.onChange(function(e){t.setupComplete&&t.configureEasyToRead(e)}),t.inputFields.allCombos.onChange(function(e){t.setupComplete&&t.configureAllCombos(e,!0)}),$("#length,#lengthInput,input[type='radio'],input[type='checkbox']").bind("change",function(){t.submit()}),t.updateButtonState(),$("#password").on("change input paste keyup click",function(e){t.updateButtonState()}),$("#length").on("change paste keyup click",function(e){t.updateButtonState()}),$("#lengthInput").on("change paste keyup click",function(e){t.updateButtonState()})}(this)},BetterGeneratePasswordDialog.prototype.updateButtonState=function(){0<$("#password").val().length?$("#fillPasswordButton").removeAttr("disabled"):$("#fillPasswordButton").attr("disabled","disabled")},BetterGeneratePasswordDialog.prototype.setCopiedGeneratedPassword=function(e){bg.LPTabState&&bg.LPTabState.setCopiedGeneratedPassword&&bg.LPTabState.setCopiedGeneratedPassword(e)},BetterGeneratePasswordDialog.prototype.saveState=function(){var e=this.getData();bg.Preferences.set({generate_length:e.length,generate_upper:e.uppercase,generate_lower:e.lowercase,generate_digits:e.numeric,generate_special:e.special,generate_ambig:e.avoidAmbiguous,generate_pronounceable:e.pronounceable,generate_allcombos:e.allCombos}),this.storePassword()},BetterGeneratePasswordDialog.prototype.close=function(){return this.saveState(),Dialog.prototype.close.apply(this,arguments)},BetterGeneratePasswordDialog.prototype.toggleHistory=function(e){var t=$("#historyView"),a=$("#showHistory"),s=$("#clearHistory"),i=$("#generatePasswordDialogDropdownAdvancedOptions");"none"===t.css("display")?(i.css("display","none"),t.css("display","block"),a.text(Strings.translateString("Hide History")),s.css("display","block"),bg.sendLpImprove("historyviewed",{source:e})):this.hideHistory(),this.setDynamicHeight()},BetterGeneratePasswordDialog.prototype.hideHistory=function(){var e=$("#historyView"),t=$("#showHistory"),a=$("#clearHistory"),s=$("#generatePasswordDialogDropdownAdvancedOptions");e.css("display","none"),s.css("display","block"),t.text(Strings.translateString("Show History")),a.css("display","none")},BetterGeneratePasswordDialog.prototype.setPasswordHistory=function(e){var t=$("#historyTable"),i=$("#historyBody"),a=$("#historyEmptyState");e&&0!==e.length?(i.empty(),e.forEach(function(e){var t=LPTools.createElement("tr"),a=LPTools.createElement("td"),s=LPTools.createElement("div","",e.password);a.className="password",a.appendChild(s),t.appendChild(a),t.appendChild(LPTools.createElement("td","",Strings.translateString(e.date))),i.append(t)}),t.show(),a.hide()):(t.hide(),a.show())},BetterGeneratePasswordDialog.prototype.applySitePasswordLengthPolicy=function(){this.data.defaultData.minimumLengthByPolicy=0;var s=bg.get("g_prefoverrides").sitepwlen;if(s)if(s=JSON.parse(s),"function"==typeof bg.get_selected_tab_data_no_extension){var i=this;bg.get_selected_tab_data_no_extension(null,function(e){var t=bg.lp_gettld_url(e.url);if(s[t]){var a=s[t];i.data.defaultData.minimumLengthByPolicy=a,i.updatePasswordLengthOptions()}})}else i.data.defaultData.minimumLengthByPolicy=0,i.updatePasswordLengthOptions()},BetterGeneratePasswordDialog.prototype.setup=function(e,t){this.applySitePasswordLengthPolicy(),Dialog.prototype.setup.apply(this,arguments),this.updateLength(t.defaultData.length),t.defaultData.avoidAmbiguous?this.configureEasyToRead(!0):t.defaultData.pronounceable?this.configureEasyToSay(!0):this.configureAllCombos(!0),bg.GenPassHistory.getWithReadableDate(this.setPasswordHistory.bind(this)),this.hideHistory()},BetterGeneratePasswordDialog.prototype.postSetup=function(e){Dialog.prototype.postSetup.apply(this,arguments),this.submit()},BetterGeneratePasswordDialog.prototype.storePassword=function(){var e=this.inputFields.password.getValue();e&&0<e.length&&(bg.GenPassHistory.add(e),bg.GenPassHistory.getWithReadableDate(this.setPasswordHistory.bind(this)))},BetterGeneratePasswordDialog.prototype.usePassword=function(){var e=this.inputFields.password.getValue(),t=function(e){return!0===e.avoidAmbiguous.getValue()?"ambig":!0===e.pronounceable.getValue()?"pronounceable":"allchars"};this.data.input?(this.data.input.val(e),this.close()):(bg.fillGeneratedPassword(this.data.tabID,this.data.tabURL,e,$.extend(this.data.saveOptions,{avoidAmbiguous:this.inputFields.avoidAmbiguous.getValue(),length:this.inputFields.length.getValue(),lowercase:this.inputFields.lowercase.getValue(),numeric:this.inputFields.numeric.getValue(),pronounceable:this.inputFields.pronounceable.getValue(),special:this.inputFields.special.getValue(),uppercase:this.inputFields.uppercase.getValue(),passwordType:t(this.inputFields),generatedPasswordCount:$("#generatedPasswordCount").val()})),LPPlatform.closePopup(!0))},BetterGeneratePasswordDialog.prototype.validate=function(e){var t=Dialog.prototype.validate.apply(this,arguments);return e.lengthInput<this.data.defaultData.minimumLengthByPolicy&&(t=!1),t},BetterGeneratePasswordDialog.prototype.handleSubmit=function(e){this.storePassword(),$("#generatedPasswordCount").val(function(){return parseInt($("#generatedPasswordCount").val())+1}),this.inputFields.password.setValue(bg.lpCreatePass(e.lengthInput,e.uppercase,e.lowercase,e.numeric,e.special,2,e.avoidAmbiguous,!0,e.pronounceable)),this.updateButtonState()};
//# sourceMappingURL=sourcemaps/betterGeneratePasswordDialog.js.map
