const errorEle = document.getElementById("error");
const resultEle = document.getElementById("result");
const loadingEle = document.getElementById("loading");

const getAddressProtocolEle = document.getElementById("getAddressProtocol");

const sendAssetsToAddressEle = document.getElementById("sendAssetsToAddress");
const sendAssetsProtocolEle = document.getElementById("sendAssetsProtocol");
const sendAssetsValueEle = document.getElementById("sendAssetsValue");
const sendAssetsAssetIdEle = document.getElementById("sendAssetsAssetId");
const sendAssetsOpReturnEle = document.getElementById('sendAssetsOpReturn');

const payInvoiceUrlEle = document.getElementById("payInvoiceUrl");

const createTokenNameEle = document.getElementById("createTokenName");
const createTokenSymbolEle = document.getElementById("createTokenSymbol");
const createTokenDecimalsEle = document.getElementById("createTokenDecimals");
const createTokenInitialSupplyEle = document.getElementById("createTokenInitialSupply");
const createTokenTokenReceiverAddressEle = document.getElementById("createTokenReceiverAddress");
const createTokenBatonReceiverAddressEle = document.getElementById("createTokenBatonReceiverAddress");

function clearText() {
  resultEle.innerHTML = '';
  errorEle.innerHTML = '';
}

function handleSuccess(data) {
  stopLoading();
  clearText();

  const formatted = syntaxHighlight(data);
  resultEle.innerHTML = formatted;
}

function processSuccess(pay_id, data = true) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("payment_text").innerHTML = "Payment was successful! You can close this tab now.";
    }
  };
  xmlhttp.open("GET", "store.php?pay_id=" + pay_id + "&pay_result=" + data, true);
  xmlhttp.send();
}

function processError(pay_id, data = false) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("payment_text").innerHTML = "Payment was unsuccessful! Please check.";
    }
  };
  xmlhttp.open("GET", "store.php?pay_id=" + pay_id + "&pay_result=" + data, true);
  xmlhttp.send();
}

function handleError(error) {
  stopLoading();
  clearText();
  errorEle.innerHTML = syntaxHighlight(error);
}

function startLoading() {
  clearText();
  loadingEle.style = 'display: block;';
}

function stopLoading() {
  loadingEle.style = 'display: none;';
}

stopLoading();

function getAddress() {
  startLoading();
  bitcoincomLink.getAddress({
    protocol: getAddressProtocolEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function sendAssets(pay_id, address, type, amount, message) {
  try {
    const sendAssetArgs = {
      to: address,
      protocol: type,
      value: amount,
      opReturn: JSON.parse(message),
    };
    if (type === 'SLP') {
      sendAssetArgs.assetId = sendAssetsAssetIdEle.value;
    }
    bitcoincomLink.sendAssets(sendAssetArgs)
    .then(function(data) { return processSuccess(pay_id); })
    .catch(function(data) { return processError(pay_id); });
  } catch (err) {
    handleError('invalid JSON input');
  }
}

function payInvoice() {
  startLoading();
  bitcoincomLink.payInvoice({
    url: payInvoiceUrlEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function createToken() {
  startLoading();
  bitcoincomLink
  .createToken({
    name: createTokenNameEle.value,
    symbol: createTokenSymbolEle.value,
    decimals: createTokenDecimalsEle.value,
    initialSupply: createTokenInitialSupplyEle.value,
    tokenReceiverAddress: createTokenTokenReceiverAddressEle.value,
    batonReceiverAddress: createTokenBatonReceiverAddressEle.value,
  })
  .then(handleSuccess)
  .catch(handleError);
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

console.log(bitcoincomLink.getWalletProviderStatus());