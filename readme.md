# hyperswarm scale scenarios

## Install

```sh
npm install -g @hyperswarm/scale-scenarios
```

## Setup

Once installed, an executable name `hscale` will be available, 
this can be used to automatically spin up a machine and set
it up with all necessary dependencies. 

General use:

```sh
hscale -c /path/to/config
```

The config file takes the format:


```ini
AWSAccessKeyId = YOUR_KEY_ID # setup in IAM
AWSSecretKey = YOUR_KEY # setup in IAM
AWSKeyPair = YOUR_KEY_PAIR #usually same name as an aws pem file
AWSSecurityGroup = allow-ssh # default
node = 8 # default
type = c5.metal # default
region = eu-central-1 # default
image = ami-009c174642dba28e4 # default
```

## Running Scale tests

An ssh command will be output when the machine has started.
Use this to log on to the machine, check the `setup-status.txt` file 
in the home directory to ensure setup has completed. 

You can then `cd scale-scenarios/scenarios` and run any of the scenarios
directly with `node`. You can also run `npm test` to run all scenarios.


## CLI

```sh
hscale --help
```

```
 
 hyperswarm scale-scenarios

  hscale -c /path/to/config

  -c | --cfg | --config     Path to a config ini file, should contain at least:
                              AWSAccessKeyId
                              AWSSecretKey
                              AWSKeyPair
                              AWSSecurityGroup (overrides --sg flag)
                            
                            Config file can also override type, region, image and node

  -n | --node               Version of Node.js to install, default: "8"
                            Can specify up to patch version number if required.

  --type | -t               Instance type, default: c5.metal

  --region | -r             AWS Region, default: eu-central-1

  --image | -i              AMI to create instance from, default: ami-009c174642dba28e4
                            (ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-20190627.1)

  --sg                      Security group, defaults to 'allow-ssh' which must
                            be manually created in order to work

  --dry | -d                Dry run instance creation

  --help | -h               Output usage


```

## More Info

See [ubuntu-dev-ec2](https://github.com/davidmarkclements/ubuntu-dev-ec2) for more on how the automated machine creation works.

## License

MIT