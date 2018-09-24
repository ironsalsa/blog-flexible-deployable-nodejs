// Dependencies
const  minimist  =  require('minimist');
const  fs  =  require('fs');

// Arg Parsing
const  args  =  minimist(process.argv.slice(2), {
    alias: {
    u: 'url',
    t: 'timeout',
    r: 'retry',
    c: 'config'
    },
});

// Set defaults
const  defaultConfig  = {
    url: "https://bing.com",
    timeout: 1000,
    retry: 10
}

// If the user gives a path to config via CLI arg, we assign it to cliConfig
const  cliConfig  =  args.config ?  JSON.parse(fs.readFileSync(args.config)) :  null;

// Declare variables following precedence
const  configSiteURL  =  args.url ||  cliConfig  &&  cliConfig.url ||  process.env.configSiteURL || defaultConfig.url;
const  configTimeout  =  args.timeout ||  cliConfig  &&  cliConfig.timeout ||  process.env.configTimeout ||  defaultConfig.timeout;
const  configRetry  =  args.retry ||  cliConfig  &&  cliConfig.retry ||  process.env.configRetry ||  defaultConfig.retry;

// Run the script
console.log(`URL: ${configSiteURL}, 
Timeout: ${configTimeout}, 
Retry: ${configRetry}`
);
