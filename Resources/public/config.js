/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    //'./bundles/ivoryckeditor/fonts.css';

    //var asset_url = "{{asset('bundles/ivoryckeditor/fonts.css')}}"; alert(asset_url);

    //var host = window.location.hostname;
    //alert(host);

    //var content = '{{ contentId }}'; alert(content);

    config.contentsCss = '../../../bundles/ivoryckeditor/fonts.css';

    config.font_names = 'Nepali/Nepali; Agra/Agra; Arjun/Arjun; Dev/Dev; Devnew/Devnew; Himalaya/Himalaya; Himali/Himali; Kanchan/Kanchan; Mangal/Mangal; Preeti/Preeti; Ritu/Ritu; Sagar/Sagar;' + config.font_names;
};
