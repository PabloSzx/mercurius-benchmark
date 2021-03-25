# mercurius-benchmark

## Installation

Install pnpm if not already installed

```
npm install -g pnpm
```

Then, install all dependencies

```
pnpm i
```

## Usage

In the folder "bench" you have 3 files of mercurius servers:

- bench/gateway.js - Gateway
- bench/service1.js - Service 1
- bench/service2.js - Service 2

Then you have two benchmarking files:

- bench/bench.js - Autocannon instance
- bench-client-setup.cjs - Autocannon worker preparation

Then you have the folder **mercurius**, whish is a "git subtree" of the original repo, you can modify it as you need.

## Benchmarking

To start the benchmarking simply call:

```sh
pnpm start
```

In repo root or "bench" folder.

The results are going to be written in the folder:

**bench/results/\*.json**

> Make sure to modify the property "title" in "bench/bench.js" to make easier to differentiate results.
