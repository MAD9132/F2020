(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{473:function(e,t,a){"use strict";a.r(t);var i=a(54),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"assignment-2-random-web-image-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assignment-2-random-web-image-app"}},[e._v("#")]),e._v(" Assignment 2 - Random Web Image App")]),e._v(" "),a("p",[e._v("In this assignment you will create an Android App using Kotlin that will first check to see if the device it is running on is connected to the internet. If it is not connected it will display an error message. If it is connected it will display a random image download from the internet.")]),e._v(" "),a("p",[e._v("The user can then press the "),a("code",[e._v("getImageButton")]),e._v(" to download another random web image.")]),e._v(" "),a("p",[e._v("There will be a minimum of 10 image URL's stored in a list. These URL's are the source addresses for the images used in this App.")]),e._v(" "),a("p",[e._v("You must find, test and then add these URL's to your App. At least 3 of the URL's must access Placeholder image generator sights that provide actual photos, for example unsplash.com.")]),e._v(" "),a("p",[e._v("The rest of the images can be URL's to photos from the web that you would like to use in your app.")]),e._v(" "),a("p",[a("strong",[e._v("NOTE")]),e._v(": All the URL's you use must have secure HTTPS: addresses.")]),e._v(" "),a("p",[e._v("You will create a class that contains a method that will deliver a random URL from your list which will then be used as the source for the image that is to be displayed.")]),e._v(" "),a("p",[e._v("This method will provide all ten URL's in the list separately, randomly and without duplicating a URL.")]),e._v(" "),a("p",[e._v("Once all ten URL's have been used, the list will shuffle then repeat this process.")]),e._v(" "),a("p",[e._v("This App will use the Glide Library to display images from the web")]),e._v(" "),a("p",[a("strong",[e._v("NOTE")]),e._v(": A demo of this App will be shown in class.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("h3",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies:")]),e._v(" "),a("p",[e._v("The latest Version of the "),a("code",[e._v("Bumptech Glide Library")]),e._v(": "),a("a",{attrs:{href:"https://github.com/bumptech/glide",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bumptech/glide"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dependencies {\n  implementation 'com.github.bumptech.glide:glide:4.10.0'\n  annotationProcessor 'com.github.bumptech.glide:compiler:4.10.0'\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h3",{attrs:{id:"user-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-interface"}},[e._v("#")]),e._v(" User Interface:")]),e._v(" "),a("p",[e._v("Add the following controls to the "),a("code",[e._v("activity_main.xml")]),e._v(" file (the user interface):")]),e._v(" "),a("ul",[a("li",[e._v("ImageView control with the id set to imageView1")]),e._v(" "),a("li",[e._v("Button control with the id set to getImageButton")])]),e._v(" "),a("h3",{attrs:{id:"glideimage-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glideimage-class"}},[e._v("#")]),e._v(" GlideImage Class:")]),e._v(" "),a("p",[e._v("You will create a new class in your project named GlideImage")]),e._v(" "),a("h3",{attrs:{id:"glideimage-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glideimage-properties"}},[e._v("#")]),e._v(" GlideImage Properties:")]),e._v(" "),a("p",[e._v("You will add two private properties:")]),e._v(" "),a("ul",[a("li",[e._v("an Integer named listCounter initialized to zero")]),e._v(" "),a("li",[e._v("a mutableListOf"),a("String",[e._v(" initialized with ten image URL's (must be https)")])],1)]),e._v(" "),a("h3",{attrs:{id:"glideimage-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glideimage-methods"}},[e._v("#")]),e._v(" GlideImage Methods:")]),e._v(" "),a("p",[e._v("The following methods will be added to the class:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("loadGlideImage")]),e._v(": which will 3 parameters (an ImageView, an Activity and a String) and no return type.")]),e._v(" "),a("li",[a("code",[e._v("getRandomImageUrl")]),e._v(": which has no parameters and returns a String.")])]),e._v(" "),a("h3",{attrs:{id:"mainactivity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mainactivity"}},[e._v("#")]),e._v(" MainActivity:")]),e._v(" "),a("p",[e._v("The following property will be added to the main activity:")]),e._v(" "),a("p",[e._v("An private instance of the GlideImage class named glideImage\nThe following private methods will be added to the main activity:")]),e._v(" "),a("p",[a("code",[e._v("checkNetworkConnectivity")]),e._v(" which has no parameter and returns a Boolean")]),e._v(" "),a("h3",{attrs:{id:"text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[e._v("#")]),e._v(" Text:")]),e._v(" "),a("p",[e._v("All displayed text must come from the "),a("code",[e._v("strings.xml")]),e._v(" file.")]),e._v(" "),a("h3",{attrs:{id:"permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions:")]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("AndroidManifest.xml")]),e._v(" file add permissions for:")]),e._v(" "),a("p",[a("strong",[e._v("INTERNET")]),e._v(" "),a("strong",[e._v("ACCESS_NETWORK_STATE")])]),e._v(" "),a("h3",{attrs:{id:"code-comments-and-regions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-comments-and-regions"}},[e._v("#")]),e._v(" Code comments and regions:")]),e._v(" "),a("p",[e._v("Add your full name and the date at the top of the MainActivity and GlideImage Kotlin source code files.")]),e._v(" "),a("p",[e._v("Add separate code regions in the MainActivity and GlideImage Kotlin source code files for Properties and methods.")]),e._v(" "),a("h2",{attrs:{id:"submission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submission"}},[e._v("#")]),e._v(" Submission")]),e._v(" "),a("p",[e._v("During class you will build and run this application on an emulator then you will show it to me running on your laptop. After I had looked at your App and source code you can submit your project as described below.")]),e._v(" "),a("p",[e._v('Submit your assignment as a complete project (containing all source code and support files) that is packaged as zip file that is created in Android Studio using the "Export to Zip File" menu item under the File menu options.')]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("strong",[e._v("NOTE")]),e._v(": Make sure you add your first and last name to your submitted zip file:")]),e._v(" "),a("p",[e._v("example: Pat_Student_AndroidAssignment.zip")])])])}),[],!1,null,null,null);t.default=s.exports}}]);