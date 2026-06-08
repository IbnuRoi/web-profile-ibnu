import {useState, useEffect, useRef} from 'react'

const useCarousel = (totalItems) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getConfig = () => {
    if (window.innerWidth >= 1024) {
      return {
        dots: totalItems - 2,
        maxIndex: totalItems - 3
      };
    }
    if (window.innerWidth >= 768) {
      return {
        dots: totalItems - 1,
        maxIndex: totalItems - 2
      };
    }
    return {
      dots: totalItems,
      maxIndex: totalItems - 1
    };
  }

  const [config, setConfig] = useState({
    dots: totalItems,
    maxIndex: totalItems - 1
  })

  useEffect(() => {
    setConfig(getConfig())

    const handleResize = () => {
        setConfig(getConfig())
    }

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [totalItems])

  const scrollToItem = (index) => {
    const container = carouselRef.current

    if(!container) return

    const items = container.querySelectorAll('.carousel-item')

    const item = items[index]

    if(!item) return
    
    item.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
    })

    setActiveIndex(index)
  }

  const handlePrev = () => {
    if(activeIndex > 0) {
        scrollToItem(activeIndex - 1)
    }
  }

  const handleNext = () => {
    if(activeIndex < config.maxIndex) {
        scrollToItem(activeIndex + 1)
    }
  }

  useEffect(() => {
    const container = carouselRef.current

    if(!container) return

    const handleScroll = () => {
        const items = container.querySelectorAll('.carousel-item')

        let closestIndex = 0
        let closestDistance = Infinity

        items.forEach((item, idx) => {
            const distance = Math.abs(
                item.offsetLeft - container.scrollLeft
            )

            if(distance < closestDistance) {
                closestDistance = distance
                closestIndex = idx
            }
        })

        setActiveIndex(closestIndex)
    }

    container.addEventListener(
        'scroll',
        handleScroll
    )

    return () => {
        container.removeEventListener(
            'scroll',
            handleScroll
        )
    }
  }, [])
  
  return {
    carouselRef,
    activeIndex,
    scrollToItem,
    handlePrev,
    handleNext,
    dots: config.dots,
    maxIndex: config.maxIndex
  }
}

export default useCarousel