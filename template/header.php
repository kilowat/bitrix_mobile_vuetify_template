
<? define("NOT_CHECK_FILE_PERMISSIONS", true); ?>
<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
    die();
}

//mobile init
if (!CModule::IncludeModule("mobileapp"))
{
    die();
}
CMobile::Init();
?>

<!DOCTYPE html >
<html class="<?= CMobile::$platform; ?>">
<head>
    <? $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/script.js"); ?>

    <? $APPLICATION->ShowHead(); ?>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <!--
     <script src="http://192.168.1.201:8081/target/target-script-min.js#anonymous"></script>
     -->
    <meta http-equiv="Content-Type" content="text/html;charset=<?= SITE_CHARSET ?>"/>
    <meta name="format-detection" content="telephone=no">
</head>
<body>
<script>
  BXMobileApp.UI.Slider.setStateEnabled(BXMobileApp.UI.Slider.state.LEFT, false);
  BXMobileApp.UI.Page.TopBar.hide();
</script>
<div id="app">
</div>

