import React from "react";

const Performance = () => {
  return (
    <div
      className=" container my-3 bg-white rounded shadow-sm p-3"
      style={{ height: "auto !important" }}
    >
      <h1 className="fs-3">
        <img
          src="https://pricegold.net/images/goldicon.svg"
          alt=""
          width="35"
        />
        Gold price Performance
      </h1>
      <p className="border-start border-4 p-2 fst-italic">
        Better and more accurate statistics, the gold data that is being studied
        starts from a year ago and always ends with the closing date of
        yesterday.
      </p>
      <p className="text-justify fs-5">
        Over the past year, the price of gold has fluctuated quite a bit.
        According to market data, the average price of gold was{" "}
        <strong>$1,981.17 per ounce</strong>. The highest price it reached was{" "}
        <strong>$2,126.18 per ounce on Sunday, December 3, 2023</strong>, while
        the lowest price was{" "}
        <strong>$1,807.82 per ounce on Sunday, February 26, 2023</strong>.
        Despite these fluctuations, gold has generally trended upwards over the
        past year, with an overall increase of about 5.55% in value.
      </p>
      <h2 className="fs-5">Gold's performance over a different period</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm table-hover fs-14 min-500">
          <thead>
            <tr className="border-bottom border-2 border-warning">
              <th>Period</th>
              <th>Change</th>
              <th>High</th>
              <th>Low</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24-Hours</td>
              <td className="text-success">
                <strong>$13.23 (0.65%)</strong>
              </td>
              <td>$2,034.69</td>
              <td>$2,021.46</td>
            </tr>
            <tr>
              <td>2 days</td>
              <td className="text-success">
                <strong>$25.52 (1.27%)</strong>
              </td>
              <td>$2,034.69</td>
              <td>$2,009.18</td>
            </tr>
            <tr>
              <td>1 week</td>
              <td className="text-danger">
                <strong>-$14.30 (-0.7%)</strong>
              </td>
              <td>$2,057.11</td>
              <td>$2,004.69</td>
            </tr>
            <tr>
              <td>2 weeks</td>
              <td className="text-danger">
                <strong>-$10.88 (-0.53%)</strong>
              </td>
              <td>$2,057.11</td>
              <td>$2,004.69</td>
            </tr>
            <tr>
              <td>1 month</td>
              <td className="text-danger">
                <strong>-$6.38 (-0.31%)</strong>
              </td>
              <td>$2,087.45</td>
              <td>$2,004.69</td>
            </tr>
            <tr>
              <td>2 months</td>
              <td className="text-success">
                <strong>$54.86 (2.77%)</strong>
              </td>
              <td>$2,126.18</td>
              <td>$1,969.39</td>
            </tr>
            <tr>
              <td>6 months</td>
              <td className="text-success">
                <strong>$74.30 (3.79%)</strong>
              </td>
              <td>$2,126.18</td>
              <td>$1,813.25</td>
            </tr>
            <tr>
              <td>1 year</td>
              <td className="text-success">
                <strong>$107.04 (5.55%)</strong>
              </td>
              <td>$2,126.18</td>
              <td>$1,807.82</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ height: "600px" }}>
        <div
          className="tradingview-widget-container"
          style={{ height: "calc(100% - 32px)" }}
        >
          <div id="watchlist-chart-demo" style={{ height: "100%" }}>
            <div
              id="tradingview_2df52-wrapper"
              style={{
                position: "relative",
                boxSizing: "content-box",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif',
                margin: "0px auto !important",
                padding: "0px !important",
                width: "100%",
                height: "100%",
              }}
            >
              <iframe
                title="advanced chart TradingView widget"
                lang="en"
                id="tradingview_2df52"
                frameBorder="0"
                allowTransparency="true"
                scrolling="no"
                allowFullScreen="true"
                src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22FX_IDC%3AXAUUSD%22%2C%22frameElementId%22%3A%22tradingview_2df52%22%2C%22interval%22%3A%22M%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22America%2FNew_York%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22pricegold.net%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22FX_IDC%3AXAUUSD%22%2C%22page-uri%22%3A%22pricegold.net%2Fperformance%2F%22%7D"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0px !important",
                  padding: "0px !important",
                }}
              ></iframe>
            </div>
          </div>
          <div
            className="tradingview-widget-copyright"
            style={{ width: "100%" }}
          >
            <a
              href="https://www.tradingview.com/symbols/XAUUSD/?utm_source=pricegold.net&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=FX_IDC%3AXAUUSD"
              rel="noopener"
              target="_blank"
            >
              <span className="blue-text">Gold price chart</span>
            </a>{" "}
            by TradingView
          </div>
          <script src="https://s3.tradingview.com/tv.js"></script>
          <script>
            {`new TradingView.widget({
            "container_id": "watchlist-chart-demo",
            "width": "100%",
            "height": "100%",
            "autosize": true,
            "symbol": "FX_IDC:XAUUSD",
            "interval": "M",
            "timezone": "America/New_York",
            "theme": "light",
            "style": "1",
            "toolbar_bg": "#f1f3f6",
            "withdateranges": true,
            "allow_symbol_change": false,
            "save_image": false,
            "locale": "en"
          });`}
          </script>
        </div>
      </div>
      <h2 className="flex-grow-1 fs-4 m-0 text-start p-2">
        <img
          src="https://pricegold.net/images/goldicon.svg"
          alt=""
          width="35"
        />
        Gold price Performance in 2023 - 2024
      </h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm table-hover fs-14 min-500">
          <thead>
            <tr className="border-bottom border-2 border-warning">
              <th>Month</th>
              <th>Change</th>
              <th>High</th>
              <th>Low</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              January 2023
              </td>
              <td className="text-danger">
                <strong>-$1.39 (-0.07%)</strong>
              </td>
              <td>$1,948.79</td>
              <td>$1,903.19</td>
            </tr>
            <tr>
              <td>
              February 2023
              </td>
              <td className="text-danger">
                <strong>-$96.10 (-4.99%)</strong>
              </td>
              <td>$1,956.98</td>
              <td>$1,807.82</td>
            </tr>
            <tr>
              <td>
              March 2023
              </td>
              <td className="text-success">
                <strong>$138.07 (7.54%)</strong>
              </td>
              <td>$2,010.15</td>
              <td>$1,809.66</td>
            </tr>
            <tr>
              <td>
              April 2023
                 
               
              </td>
              <td className="text-success">
                <strong>$13.26 (0.67%)</strong>
              </td>
              <td>$2,046.09</td>
              <td>$1,951.48</td>
            </tr>
            <tr>
              <td>
              May 2023
              </td>
              <td className="text-success">
                <strong>-$18.72 (-0.94%)</strong>
              </td>
              <td>$2,055.79</td>
              <td>$1,933.22</td>
            </tr>
            <tr>
              <td>
                
                  
              June 2023
              </td>
              <td className="text-danger">
                <strong>-$44.72 (-2.28%)</strong>
              </td>
              <td>$1,982.71</td>
              <td>$1,896.06</td>
            </tr>
            <tr>
              <td>
              July 2023
              </td>
              <td className="text-success">
                <strong>$42.59 (2.22%)</strong>
              </td>
              <td>$1,986.56</td>
              <td>$1,903.94</td>
            </tr>
            <tr>
              <td>
              August 2023
              </td>
              <td className="text-danger">
                <strong>-$20.70 (-1.06%)</strong>
              </td>
              <td>$1,959.82</td>
              <td>$1,886.60</td>
            </tr>
            <tr>
              <td>
              September 2023
              </td>
              <td className="text-danger">
                <strong>-$91.33 (-4.71%)</strong>
              </td>
              <td>$1,947.86</td>
              <td>$1,848.14</td>
            </tr>
            <tr>
              <td>
              October 2023
              </td>
              <td className="text-success">
                <strong>$128.61 (6.96%)</strong>
              </td>
              <td>$2,009.11</td>
              <td>$1,813.25</td>
            </tr>
            <tr>
              <td>
                
                 
              November 2023
              </td>
              <td className="text-success">
                <strong>$62.18 (3.14%)</strong>
              </td>
              <td>$2,048.62</td>
              <td>$1,934.48</td>
            </tr>
            <tr>
              <td>
              December 2023
                 
               
              </td>
              <td className="text-success">
                <strong>$25.03 (1.23%)</strong>
              </td>
              <td>$2,126.18</td>
              <td>$1,975.02</td>
            </tr>
            <tr>
              <td>
              January 2024
                  
                
              </td>
              <td className="text-danger">
                <strong>-$31.57 (-1.53%)</strong>
              </td>
              <td>$2,077.85</td>
              <td>$2,004.69</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;
