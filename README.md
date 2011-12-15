Requirements
============
In order to build a copy of the Framework and Upgrade Kits using this source, you will need Perl installed on your machine. To update the version of Require.js used by the framework, you will need Node.js.

Building
========
The BigMachines Framework can be built using the "release_starter.pl" script found in this directory. That script will grab the expected files from the "framework" and package them as zips into the Framework Starter Kit and Upgrade Kits, along with all their documentation.

Once you've run the build command, you will probably want to zip up the contents of those folders in order to easily share the release with others.

Updating Require
================
If you need to build the framework with a new version of require, then you can use the r.js optimizer tool to do so. The tool can be harnessed using either Rhino or Node.js; I recommend Node.js, since it can be installed and run in Windows and will be easier and faster to set up.

Once you have Node ready, you can run the following command from within the "build" directory:

    node r.js -o baseUrl=. paths.requireLib=require name=before-compile include=requireLib out=after-compile.js

This will create a build of require that includes all the files listed in the "before-compile.js" file, using the version of require in the "require.js" file.

Once you have that file built, you can use it by pasting the contents of after- compile.js into bm-framework.js, in between the // ======REQUIRE====== comment blocks.