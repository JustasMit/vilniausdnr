import React from "react"
import { useTranslation } from "react-i18next"

const Addresses = () => {
	const { t, i18n } = useTranslation()

	return <h2>{t("home.addresses")}</h2>
}

export default Addresses
