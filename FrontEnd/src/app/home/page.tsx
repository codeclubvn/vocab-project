import { Theme,Heading, Grid, Text, Card, Flex, Avatar, Box } from '@radix-ui/themes';
import { Navbar } from "@/components/layout/Navbar" 
import { Footer } from "@/components/layout/Footer"
import '@radix-ui/themes/styles.css'; 
import { Button } from '@/components/common/Button'; 

export default function Page() {
  return (
    <>
        <Theme>
            <Navbar /> 
                <div className='mt-[var(--navbar-height)] mb-[8rem] md:mb-[0rem]' /> 
                <div className='grid grid-cols-4 gap-[100px] mx-[80px] mt-[147px] w-100'>
                  <div className='course col-span-3'>
                    <div className='your-course'>
                      <div className='course-header flex justify-between items-center '>
                        <Heading>Khoá học của bạn</Heading> 
                        <div className='navigate-course-swapper'>
                          <Button className='navigation-course-prev' leftIcon={<>{"<"}</>}> 
                          </Button>
                          <Text> 1/2 </Text>
                          <Button className='navigation-course-next' leftIcon={<>{">"}</>}> 
                          </Button> 
                        </div> 
                      </div>

                      <div className='course-body mt-[27px]'> 
                          <div className='course-item grid grid-cols-4 gap-[30px] mt-[20px]'>
                            <img src='https://assets.quizlet.com/a/j/dist/app/i/homepage/whats_new/search.644f93633253876.png' alt='course-image'/>
                            <div className='course-item-detail col-span-3'>
                              <div className='course-item-header flex justify-between items-center'>
                                <Heading>Course name</Heading>
                                <Button className='course-item-option-btn mx-[5px] text-lg font-bold'>:</Button> 
                              </div>

                              <div className='processing mt-[10px] flex gap-[16px]'>
                                <div className='percentage'>
                                  0%
                                </div>
                                <div className='number-words'>
                                  0/15 Từ đang học
                                </div>
                              </div>
                            </div>   
                          </div>
                          <div className='course-item grid grid-cols-4 gap-[30px] mt-[20px]'>
                            <img src='https://assets.quizlet.com/a/j/dist/app/i/homepage/whats_new/search.644f93633253876.png' alt='course-image'/>
                            <div className='course-item-detail col-span-3'>
                              <div className='course-item-header flex justify-between items-center'>
                                <Heading>Course name</Heading>
                                <Button className='course-item-option-btn mx-[5px] text-lg font-bold'>:</Button> 
                              </div>

                              <div className='processing mt-[10px] flex gap-[16px]'>
                                <div className='percentage'>
                                  0%
                                </div>
                                <div className='number-words'>
                                  0/15 Từ đang học
                                </div>
                              </div>
                            </div>   
                          </div>
                          <div className='course-item grid grid-cols-4 gap-[30px] mt-[20px]'>
                            <img src='https://assets.quizlet.com/a/j/dist/app/i/homepage/whats_new/search.644f93633253876.png' alt='course-image'/>
                            <div className='course-item-detail col-span-3'>
                              <div className='course-item-header flex justify-between items-center'>
                                <Heading>Course name</Heading>
                                <Button className='course-item-option-btn mx-[5px] text-lg font-bold'>:</Button> 
                              </div>

                              <div className='processing mt-[10px] flex gap-[16px]'>
                                <div className='percentage'>
                                  0%
                                </div>
                                <div className='number-words'>
                                  0/15 Từ đang học
                                </div>
                              </div>
                            </div>   
                          </div>
                           
                      </div>
                    </div>  

                    <div className='divider h-[3px] w-full bg-black mt-[33px] mb-[46px]'> 
                    </div>
                    
                    <div className='suggest-course'>
                        <Heading>Đề xuất</Heading>
                        <div className='grid grid-cols-3 gap-[20px]'>
                          <div className='course-item grid grid-cols-2 gap-[10px] mt-[20px]'>
                              <img src='https://assets.quizlet.com/a/j/dist/app/i/homepage/whats_new/search.644f93633253876.png' alt='course-image'/>
                              <div className='course-item-detail '>
                                <div className='course-item-header flex justify-between items-center'>
                                  <Heading size='4'>Course name</Heading>
                                </div> 
                                <Text className='line-clamp-2' as='p' size='2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos nihil praesentium autem doloribus veritatis facilis neque vitae labore quo et, explicabo quibusdam fugit, assumenda maxime accusamus quod? Optio, vitae.</Text>
                              </div>   
                            </div> 
                          <div className='course-item grid grid-cols-2 gap-[10px] mt-[20px]'>
                              <img src='https://assets.quizlet.com/a/j/dist/app/i/homepage/whats_new/search.644f93633253876.png' alt='course-image'/>
                              <div className='course-item-detail '>
                                <div className='course-item-header flex justify-between items-center'>
                                  <Heading size='4'>Course name</Heading>
                                </div> 
                                <Text className='line-clamp-2' as='p' size='2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos nihil praesentium autem doloribus veritatis facilis neque vitae labore quo et, explicabo quibusdam fugit, assumenda maxime accusamus quod? Optio, vitae.</Text>
                              </div>   
                            </div> 
                          <div className='course-item grid grid-cols-2 gap-[10px] mt-[20px]'>
                              <img src='https://assets.quizlet.com/a/j/dist/app/i/homepage/whats_new/search.644f93633253876.png' alt='course-image'/>
                              <div className='course-item-detail '>
                                <div className='course-item-header flex justify-between items-center'>
                                  <Heading size='4'>Course name</Heading>
                                </div> 
                                <Text className='line-clamp-2' as='p' size='2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quos nihil praesentium autem doloribus veritatis facilis neque vitae labore quo et, explicabo quibusdam fugit, assumenda maxime accusamus quod? Optio, vitae.</Text>
                              </div>   
                            </div> 
                        </div>
                    </div>
                  </div>
                  <div className='ranking'>
                      <div className='streak'>
                        Streak
                      </div>
                      <div className='rank'>
                        <Heading className='capitalize'>Bảng xếp hạng</Heading>
                        <div className='rank-list'>
                          <div className='mt-[25px]'></div>
                          <Card style={{ maxWidth: 240 }}>
                            <Flex gap="4" align="center">
                              <Avatar
                                size="4"
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                radius="full"
                                fallback="T"
                              />
                              <Box>
                                <Text as="div" size="3" weight="bold">
                                  User name
                                </Text>
                                <Text as="div" size="3" color="gray">
                                  Scores
                                </Text>
                              </Box>
                            </Flex>
                          </Card>    
                          
                          <Card style={{ maxWidth: 240, marginTop: '10px' }}>
                            <Flex gap="4" align="center">
                              <Avatar
                                size="4"
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                radius="full"
                                fallback="T"
                              />
                              <Box>
                                <Text as="div" size="3" weight="bold">
                                  User name
                                </Text>
                                <Text as="div" size="3" color="gray">
                                  Scores
                                </Text>
                              </Box>
                            </Flex>
                          </Card>     
                          <Card style={{ maxWidth: 240, marginTop: '10px' }}>
                            <Flex gap="4" align="center">
                              <Avatar
                                size="4"
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                radius="full"
                                fallback="T"
                              />
                              <Box>
                                <Text as="div" size="3" weight="bold">
                                  User name
                                </Text>
                                <Text as="div" size="3" color="gray">
                                  Scores
                                </Text>
                              </Box>
                            </Flex>
                          </Card>   
                          <Card style={{ maxWidth: 240, marginTop: '10px' }}>
                            <Flex gap="4" align="center">
                              <Avatar
                                size="4"
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                radius="full"
                                fallback="T"
                              />
                              <Box>
                                <Text as="div" size="3" weight="bold">
                                  User name
                                </Text>
                                <Text as="div" size="3" color="gray">
                                  Scores
                                </Text>
                              </Box>
                            </Flex>
                          </Card>   
                          <Card style={{ maxWidth: 240, marginTop: '10px' }}>
                            <Flex gap="4" align="center">
                              <Avatar
                                size="4"
                                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                radius="full"
                                fallback="T"
                              />
                              <Box>
                                <Text as="div" size="3" weight="bold">
                                  User name
                                </Text>
                                <Text as="div" size="3" color="gray">
                                  Scores
                                </Text>
                              </Box>
                            </Flex>
                          </Card>   
                        </div>
                      </div>
                  </div>
                </div>
            <div className='divider h-[1px] w-full bg-black mt-[71px]'> 
            </div>
            <Footer />
      </Theme>
    </>
  )
}
