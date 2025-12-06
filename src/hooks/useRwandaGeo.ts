import { useState, useCallback } from 'react'
import {
  getProvinces,
  getDistrictsByProvince,
  getSectorsByDistrict,
  getCellsBySector,
  getVillagesByCell
} from 'rwanda-geo-structure'

export interface GeoSelection {
  province: string
  district: string
  sector: string
  cell: string
  village: string
}

export function useRwandaGeo(initialSelection?: Partial<GeoSelection>) {
  const [selection, setSelection] = useState<GeoSelection>({
    province: initialSelection?.province || '',
    district: initialSelection?.district || '',
    sector: initialSelection?.sector || '',
    cell: initialSelection?.cell || '',
    village: initialSelection?.village || ''
  })

  const provinces = getProvinces()
  const districts = selection.province ? getDistrictsByProvince(selection.province) : []
  const sectors = selection.province && selection.district 
    ? getSectorsByDistrict(selection.province, selection.district) 
    : []
  const cells = selection.province && selection.district && selection.sector
    ? getCellsBySector(selection.province, selection.district, selection.sector)
    : []
  const villages = selection.province && selection.district && selection.sector && selection.cell
    ? getVillagesByCell(selection.province, selection.district, selection.sector, selection.cell)
    : []

  const setProvince = useCallback((province: string) => {
    setSelection({ province, district: '', sector: '', cell: '', village: '' })
  }, [])

  const setDistrict = useCallback((district: string) => {
    setSelection(prev => ({ ...prev, district, sector: '', cell: '', village: '' }))
  }, [])

  const setSector = useCallback((sector: string) => {
    setSelection(prev => ({ ...prev, sector, cell: '', village: '' }))
  }, [])

  const setCell = useCallback((cell: string) => {
    setSelection(prev => ({ ...prev, cell, village: '' }))
  }, [])

  const setVillage = useCallback((village: string) => {
    setSelection(prev => ({ ...prev, village }))
  }, [])

  const reset = useCallback(() => {
    setSelection({ province: '', district: '', sector: '', cell: '', village: '' })
  }, [])

  return {
    selection,
    provinces,
    districts,
    sectors,
    cells,
    villages,
    setProvince,
    setDistrict,
    setSector,
    setCell,
    setVillage,
    reset
  }
}
