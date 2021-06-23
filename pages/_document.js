import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="stylesheet" href="/vendors/gaxon/styles.css"/>
        <link rel="stylesheet" href="/vendors/flag/sprite-flags-24x24.css"/>
        <link rel="stylesheet" href="/vendors/noir-pro/styles.css"/>
        <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
        <script src="https://www.amcharts.com/lib/3/serial.js"></script>
        <script src="https://www.amcharts.com/lib/3/xy.js"></script>
        <script src="https://www.amcharts.com/lib/3/pie.js"></script>
        <script src="https://www.amcharts.com/lib/3/funnel.js"></script>
        <script src="https://www.amcharts.com/lib/3/gauge.js"></script>
        <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
        <script src="https://www.amcharts.com/lib/3/maps/js/usaLow.js"></script>
        <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>
        <script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js"></script>
        <script src="https://www.amcharts.com/lib/3/maps/js/continentsLow.js"></script>
        <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
        <script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
        <script src="https://www.amcharts.com/lib/3/themes/none.js"></script>
        <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css"
              media="all"/>
        <script
          src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry,drawing&key=AIzaSyA72EHVeUE3qZ4eG6BnHgxgfIWH48dTEDA"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </Html>
    );
  }
}
