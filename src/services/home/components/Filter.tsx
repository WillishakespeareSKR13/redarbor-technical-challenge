import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useState } from "react"
import { ActionButton, Badge, InputSearch, List, View } from "../../shared/components"
import { SKELETON_CATEGORIES } from "../constants/categories"
import { JOB_TYPES_STATUS } from "../constants/jobs"
import { useCategories } from "../hooks/categories"
import { useFilter } from "../hooks/filters"
import { useJobs } from "../hooks/jobs"

export const FiltersJob = () => {
  const { isFetching } = useJobs()
  const [showFilters, setShowFilters] = useState(true)
  const { data, isLoading } = useCategories()
  const { search, setSearch, category, setCategory, typeJob, setTypeJob } = useFilter()
  return (
    <View w="100%" direction="column" gap={0}>
      <View w="100%" p="md" pb={0} direction="row" align="center" justify="space-between">
        <InputSearch value={search} onSearch={setSearch} isRefetching={isFetching} />
        <ActionButton
          r="xxs"
          c="background.100"
          icon={<FontAwesome6 name={showFilters ? "filter-circle-xmark" : "filter"} size={12} />}
          onPress={() => setShowFilters(!showFilters)}
        />
      </View>
      <View w="100%" h={showFilters ? "auto" : 0} overflow="hidden" gap="xs" py="md" pt={showFilters ? "md" : 0}>
        <List
          data={isLoading ? SKELETON_CATEGORIES : data ?? []}
          horizontal
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Badge
              key={item.id}
              label={item.name}
              isLoading={isLoading}
              variant={category === item.slug ? "filled" : "light"}
              onPress={() => setCategory(category === item.slug ? "" : item.slug)}
            />
          )}
          contentProps={{
            gap: "xs",
            px: "md",
          }}
        />
        <List
          data={JOB_TYPES_STATUS}
          horizontal
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Badge
              key={item.id}
              label={item.name}
              variant={typeJob === item.id ? "filled" : "light"}
              onPress={() => setTypeJob(typeJob === item.id ? "" : item.id)}
            />
          )}
          contentProps={{
            gap: "xs",
            px: "md",
          }}
        />
      </View>
    </View>
  )
}
