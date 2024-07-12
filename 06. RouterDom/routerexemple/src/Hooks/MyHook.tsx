import React, { useState } from 'react'

const useMyHook = () => {
  const [total, setTotal] = useState<number>(0);

  const IncreaseByOne = () => {
    setTotal(total + 1);
  }

  return { total, IncreaseByOne }
}

export default useMyHook;