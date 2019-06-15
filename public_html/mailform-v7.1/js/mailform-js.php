<?php


if ( file_exists( dirname( __FILE__ ) .'/../addon/token/session.php' ) ) {
	include( dirname( __FILE__ ) .'/../addon/token/session.php' );
}


error_reporting( E_ALL );




mb_language( 'ja' );
mb_internal_encoding( 'UTF-8' );




require_once( dirname( __FILE__ ) .'/class.mailform-js.php' );
$responsive_mailform_js = new Mailform_Js();




?>