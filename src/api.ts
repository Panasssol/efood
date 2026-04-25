import { useState, useEffect } from 'react'
import type { Restaurant } from './types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar restaurantes')
        return res.json()
      })
      .then((data: Restaurant[]) => {
        setRestaurants(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { restaurants, loading, error }
}

export function useRestaurant(id: string | undefined) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao carregar restaurante')
        return res.json()
      })
      .then((data: Restaurant[]) => {
        const found = data.find((r) => r.id === Number(id))
        if (found) {
          setRestaurant(found)
        } else {
          setError('Restaurante não encontrado')
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  return { restaurant, loading, error }
}
