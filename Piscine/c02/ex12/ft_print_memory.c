/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_memory.c                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/21 16:46:56 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/23 09:45:36 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
#include <unistd.h>

int	is_char_printable(char c)
{
	return (c >= ' ' && c < 127);
}

void	*ft_print_memory(void *addr, unsigned int size)
{
	void	*add;
	int		len;

	add = addr;
	len = size;
	is_char_printable('s');
	write(1, "c", 1);
	return (addr);
}
