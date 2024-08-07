package com.morpheusdata.reports

import com.morpheusdata.core.Plugin

/**
 * Example Custom Reports Plugin
 */
class ReportsPlugin extends Plugin {

	@Override
	String getCode() {
		return 'morpheus-reports-plugin'
	}

	@Override
	void initialize() {
		CustomReportProvider customReportProvider = new CustomReportProvider(this, morpheus)
		CustomAnalyticsProvider customAnalyticsProvider = new CustomAnalyticsProvider(this, morpheus)
		this.pluginProviders.put(customReportProvider.code, customReportProvider)
		this.pluginProviders.put(customAnalyticsProvider.code, customAnalyticsProvider)
		this.setName("Custom Reports")
		
	}

	@Override
	void onDestroy() {
	}
}
