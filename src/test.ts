// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

/**

/**
 * Initializes the test environment for the test bed.
 * 
 * @param {Module} BrowserDynamicTestingModule - The module that initializes the test environment.
 * 
 * @param {Function} platformBrowserDynamicTesting - The function that initializes the test environment.
 * 
 * @returns None
 * 
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

/**
 * A function that takes in a require.context and returns a list of all the files in the context (tests). 
 * 
 * @param {require.context} context - the require.context to get the files from. 
 * 
 * @returns {string[]} - a list of all the files in the context. 
 * 
 */
const context = require.context('./', true, /\.spec\.ts$/);

/**
 * load the modules.      
 */
context.keys().map(context);
