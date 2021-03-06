/**
 * Analytics module initialization.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */
import Data from 'googlesitekit-data';
import './datastore';
import { fillFilterWithComponent } from '../../util';
import { SetupMain as AnalyticsSetup } from './setup';
import { SettingsMain as AnalyticsSettings } from './settings';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

function ConnectedAnalyticsSetup( props ) {
	return (
		<Data.RegistryProvider value={ Data }>
			<AnalyticsSetup { ...props } />
		</Data.RegistryProvider>
	);
}

function ConnectedAnalyticsSettings( props ) {
	return (
		<Data.RegistryProvider value={ Data }>
			<AnalyticsSettings { ...props } />
		</Data.RegistryProvider>
	);
}

addFilter(
	'googlesitekit.ModuleSetup-analytics',
	'googlesitekit.AnalyticsModuleSetup',
	fillFilterWithComponent( ConnectedAnalyticsSetup )
);

addFilter(
	'googlesitekit.ModuleSettingsDetails-analytics',
	'googlesitekit.AnalyticsModuleSettings',
	fillFilterWithComponent( ConnectedAnalyticsSettings )
);
