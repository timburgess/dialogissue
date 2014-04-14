/*
 * @author Tim Burgess <info@tim-burgess.com>
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, browser: true, white:true */
/*global $, define, Mustache, brackets, debugger */

define(function (require, exports, module) {
  "use strict";

//  var COMMAND_ID = "timburgess.ftpsync";

  var AppInit             = brackets.getModule("utils/AppInit"),
      ProjectManager      = brackets.getModule("project/ProjectManager"),
      CommandManager      = brackets.getModule("command/CommandManager"),
      KeyBindingManager   = brackets.getModule("command/KeyBindingManager"),
      NodeDomain          = brackets.getModule("utils/NodeDomain"),
      ExtensionUtils      = brackets.getModule("utils/ExtensionUtils"),
      Dialogs             = brackets.getModule("widgets/Dialogs"),
      FileSystem          = brackets.getModule("filesystem/FileSystem"),
      FileUtils           = brackets.getModule("file/FileUtils"),
      Strings             = brackets.getModule("strings");


  var mainDialog       = require("text!htmlContent/ftp-dialog.html");
  var toolbar          = require("text!htmlContent/ftp-toolbar.html");

  var ftpDomain;
  var defaultKeyPath = "";


  // handle ok button
  function handleOpen() {
    console.log('open clicked');
  }

  // handle browse for file
  function handleBrowse() {
    console.log('browse clicked');
  }

  // show the ftp dialog and get references    
  function showDialog() {

      var templateVars = {
          path: '/Users/hansolo/.ssh/id_rsa'
      }

      Dialogs.showModalDialogUsingTemplate(Mustache.render(mainDialog, templateVars), false);

      // set dropdown, focus to host input and add button handlers
      var $dlg = $(".ftp-dialog.instance");

      $dlg.find(".dialog-button[data-button-id='open']").on("click", handleOpen);
      $dlg.find(".dialog-button[data-button-id='browse']").on("click", handleBrowse);
  }

  AppInit.appReady(function () {

    // load stylesheet
    ExtensionUtils.loadStyleSheet(module, "styles/styles.css");

    // add icon to toolbar & listener
    $("#main-toolbar .buttons").append(toolbar);
    $("#toolbar-ftpsync").on("click", function() {
        showDialog();
    });


  });
        
});
